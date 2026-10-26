import { progressStorageKey, STORAGE_KEY } from "../progress/storage";
import { createSalt, hashPassword, saltFromStored, saltToStored, sameSecret } from "./passwords";

const ACCOUNTS_KEY = "firsttouch.accounts.v1";
const SESSION_KEY = "firsttouch.session.v1";

export interface PublicUser {
  id: string;
  name: string;
  email: string;
}

interface StoredAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
}

interface AccountResult {
  user?: PublicUser;
  error?: string;
}

function isStoredAccount(value: unknown): value is StoredAccount {
  if (!value || typeof value !== "object") {
    return false;
  }
  const account = value as Record<string, unknown>;
  return (
    typeof account.id === "string" &&
    typeof account.name === "string" &&
    typeof account.email === "string" &&
    typeof account.passwordHash === "string" &&
    typeof account.salt === "string"
  );
}

function loadAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as { accounts?: unknown };
    if (!Array.isArray(parsed.accounts)) {
      return [];
    }
    return parsed.accounts.filter(isStoredAccount);
  } catch {
    return [];
  }
}

function saveAccounts(accounts: readonly StoredAccount[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify({ accounts }));
}

function toPublic(account: StoredAccount): PublicUser {
  return { id: account.id, name: account.name, email: account.email };
}

function writeSession(userId: string) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId }));
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // Session stays only in memory if this browser blocks storage.
  }
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function validateEmail(email: string): string | null {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter a valid email.";
  }
  return null;
}

function claimLegacyProgress(userId: string) {
  try {
    const legacy = localStorage.getItem(STORAGE_KEY);
    if (!legacy) {
      return;
    }
    const nextKey = progressStorageKey(userId);
    if (!localStorage.getItem(nextKey)) {
      localStorage.setItem(nextKey, legacy);
    }
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // A missing copy leaves the new account with empty progress.
  }
}

export function loadSessionUser(): PublicUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as { userId?: unknown };
    if (typeof parsed.userId !== "string") {
      return null;
    }
    const account = loadAccounts().find((item) => item.id === parsed.userId);
    if (!account) {
      clearSession();
      return null;
    }
    return toPublic(account);
  } catch {
    return null;
  }
}

export async function registerAccount(input: {
  name: string;
  email: string;
  password: string;
}): Promise<AccountResult> {
  const name = input.name.trim();
  const email = normalizeEmail(input.email);
  if (!name) {
    return { error: "Add your name." };
  }
  if (name.length > 40) {
    return { error: "Use a shorter name." };
  }
  const emailError = validateEmail(email);
  if (emailError) {
    return { error: emailError };
  }
  if (input.password.length < 8) {
    return { error: "Use at least 8 characters." };
  }
  if (input.password.length > 100) {
    return { error: "Use a shorter password." };
  }
  if (!globalThis.crypto?.subtle) {
    return { error: "This browser can't create an account." };
  }

  try {
    const accounts = loadAccounts();
    if (accounts.some((account) => account.email === email)) {
      return { error: "That email already has an account." };
    }
    const salt = createSalt();
    const account: StoredAccount = {
      id: crypto.randomUUID(),
      name,
      email,
      salt: saltToStored(salt),
      passwordHash: await hashPassword(input.password, salt),
    };
    const isFirstAccount = accounts.length === 0;
    saveAccounts([...accounts, account]);
    writeSession(account.id);
    if (isFirstAccount) {
      claimLegacyProgress(account.id);
    }
    return { user: toPublic(account) };
  } catch {
    return { error: "This browser can't save an account." };
  }
}

export async function loginAccount(input: { email: string; password: string }): Promise<AccountResult> {
  const email = normalizeEmail(input.email);
  if (!email || !input.password) {
    return { error: "Enter your email and password." };
  }
  const emailError = validateEmail(email);
  if (emailError) {
    return { error: emailError };
  }
  if (!globalThis.crypto?.subtle) {
    return { error: "This browser can't sign in." };
  }

  try {
    const account = loadAccounts().find((item) => item.email === email);
    if (!account) {
      return { error: "Email or password is wrong." };
    }
    const hash = await hashPassword(input.password, saltFromStored(account.salt));
    if (!sameSecret(hash, account.passwordHash)) {
      return { error: "Email or password is wrong." };
    }
    writeSession(account.id);
    return { user: toPublic(account) };
  } catch {
    return { error: "This browser can't sign in." };
  }
}
