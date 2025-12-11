// lib/auth.ts
export type SessionUser = {
  id: string;
  email: string;
  role: "user" | "admin";
};

const STORAGE_KEY = "session-user";

export function saveSession(user: SessionUser) {
  if (typeof window === "undefined") return;
  // Only store if it's a real object with an email
  if (!user || !user.email) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as SessionUser;
  } catch {
    // If the value is garbage like "undefined", clear it
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function clearSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

