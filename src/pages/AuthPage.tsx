import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth-context";

interface AuthPageProps {
  mode: "sign-in" | "create";
}

export function AuthPage({ mode }: AuthPageProps) {
  return <AuthForm key={mode} mode={mode} />;
}

function AuthForm({ mode }: AuthPageProps) {
  const auth = useAuth();
  const creating = mode === "create";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) {
      return;
    }
    setPending(true);
    setError("");
    const message = creating
      ? await auth.createAccount({ name, email, password })
      : await auth.signIn({ email, password });
    if (message) {
      setError(message);
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-navy px-4 py-10 text-ink">
      <div className="w-full max-w-md">
        <img src="/firsttouch-logo.png" alt="FirstTouch" className="mx-auto h-auto w-56" />
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
          {creating ? "Create account" : "Sign in"}
        </h1>
        <p className="mt-2 text-sm text-mist">Saved on this device.</p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          {creating ? (
            <label className="block text-sm font-bold">
              Name
              <input
                className="mt-1 w-full rounded-2xl border border-line bg-card px-4 py-3 text-base font-normal"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                maxLength={40}
              />
            </label>
          ) : null}
          <label className="block text-sm font-bold">
            Email
            <input
              className="mt-1 w-full rounded-2xl border border-line bg-card px-4 py-3 text-base font-normal"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-bold">
            Password
            <input
              className="mt-1 w-full rounded-2xl border border-line bg-card px-4 py-3 text-base font-normal"
              type="password"
              autoComplete={creating ? "new-password" : "current-password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={creating ? 8 : undefined}
            />
          </label>
          {error ? (
            <p className="text-sm font-bold text-pitch" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="min-h-12 w-full rounded-full bg-pitch px-5 py-3 font-extrabold text-navy disabled:cursor-not-allowed disabled:bg-card-2 disabled:text-mist"
            disabled={pending}
          >
            {pending ? "Please wait" : creating ? "Create account" : "Sign in"}
          </button>
        </form>
        <p className="mt-4 text-sm">
          {creating ? (
            <Link className="font-bold underline" to="/sign-in">
              Already have an account? Sign in
            </Link>
          ) : (
            <Link className="font-bold underline" to="/create-account">
              New here? Create an account
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
