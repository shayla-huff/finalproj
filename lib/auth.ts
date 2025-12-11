export type SessionUser = {
    id: string;
    email: string;
    role: "user" | "admin";
};

const STORAGE_KEY = "session-user";

export function saveSession(user: SessionUser) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getSession(): SessionUser | null {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as SessionUser) : null;
}

export function clearSession() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
}