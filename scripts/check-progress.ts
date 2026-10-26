import { loadSessionUser, loginAccount, registerAccount, clearSession } from "../src/auth/storage.ts";
import { allSkillsLessonIds, lessons, lessonsForPathway } from "../src/data/lessons.ts";
import {
  badgeEarnedByCompletion,
  categoryCount,
  earnedBadges,
  loadCompletedIds,
  progressStorageKey,
  saveCompletedIds,
  xpFor,
} from "../src/progress/storage.ts";

const memory = new Map<string, string>();
Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
    removeItem: (key: string) => {
      memory.delete(key);
    },
  },
});

if (lessons.length !== 32) {
  throw new Error(`Expected 32 lessons, got ${lessons.length}`);
}

for (const category of ["passing", "dribbling", "shooting", "defending"] as const) {
  const group = lessonsForPathway(category);
  if (group.length !== 8) {
    throw new Error(`${category} has ${group.length}`);
  }
  if (group.some((lesson, index) => lesson.order !== index + 1)) {
    throw new Error(`${category} order is not 1-8`);
  }
}

if (lessonsForPathway("all").length !== 32) {
  throw new Error("All Skills pathway is not 32 lessons");
}
if (new Set(allSkillsLessonIds).size !== 32) {
  throw new Error("Duplicate All Skills ids");
}

const passingIds = lessonsForPathway("passing").map((lesson) => lesson.id);
if (categoryCount(passingIds, "passing") !== 8) {
  throw new Error("Category count failed");
}
if (earnedBadges(passingIds).join() !== "passing") {
  throw new Error(`Badges were ${earnedBadges(passingIds).join()}`);
}
if (badgeEarnedByCompletion(passingIds.slice(0, 7), "passing-8") !== "Playmaker") {
  throw new Error("Playmaker badge did not unlock on the 8th passing lesson");
}
if (badgeEarnedByCompletion(passingIds.slice(0, 6), "passing-7") !== null) {
  throw new Error("Badge unlocked too early");
}
if (xpFor(["passing-1", "dribbling-1"]) !== 200) {
  throw new Error("XP should be 100 per unique lesson");
}

const userId = "tester";
saveCompletedIds(userId, ["passing-1", "not-a-lesson"]);
const loaded = loadCompletedIds(userId);
if (loaded.join() !== "passing-1") {
  throw new Error(`Storage kept unknown ids: ${loaded.join()}`);
}
memory.set(progressStorageKey(userId), "{");
if (loadCompletedIds(userId).length !== 0) {
  throw new Error("Broken storage should reset to empty");
}

const withVideo = lessons.filter((lesson) => lesson.video);
const withoutVideo = lessons.filter((lesson) => !lesson.video);
if (withVideo.length < 20) {
  throw new Error("Expected most lessons to have a verified tutorial");
}
if (withoutVideo.length === 0) {
  throw new Error("Expected an honest coming-soon state for unverified tutorials");
}
for (const lesson of withVideo) {
  if (!lesson.video?.url.includes(lesson.video.youtubeId)) {
    throw new Error(`Video url mismatch for ${lesson.id}`);
  }
}
for (const lesson of lessons) {
  if (lesson.drill.requiresPartner && !lesson.soloAlternative) {
    throw new Error(`${lesson.id} is missing a solo alternative`);
  }
}

memory.set("firsttouch.progress.v1", JSON.stringify({ completedLessonIds: ["dribbling-1"] }));
const created = await registerAccount({ name: "Asha", email: "Asha@Example.com", password: "password1" });
if (!created.user || created.user.email !== "asha@example.com") {
  throw new Error("Create account failed");
}
if (loadCompletedIds(created.user.id).join() !== "dribbling-1") {
  throw new Error("First account did not keep earlier progress");
}
if (loadSessionUser()?.id !== created.user.id) {
  throw new Error("Create account did not sign in");
}
const duplicate = await registerAccount({ name: "Other", email: "asha@example.com", password: "password1" });
if (!duplicate.error) {
  throw new Error("Duplicate email was allowed");
}
const wrong = await loginAccount({ email: "asha@example.com", password: "nope1234" });
if (!wrong.error) {
  throw new Error("Wrong password was accepted");
}
clearSession();
const signedIn = await loginAccount({ email: "asha@example.com", password: "password1" });
if (signedIn.user?.name !== "Asha") {
  throw new Error("Sign in failed");
}
const second = await registerAccount({ name: "Bo", email: "bo@example.com", password: "password2" });
if (!second.user) {
  throw new Error("Second account failed");
}
if (loadCompletedIds(second.user.id).length !== 0) {
  throw new Error("Second account copied the first account's progress");
}

console.log(
  `ok ${lessons.length} lessons, ${withVideo.length} tutorials, ${withoutVideo.length} coming soon`,
);
