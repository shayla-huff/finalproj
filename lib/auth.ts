export type SessionUser = {
    id: string;
    email: string;
    role: "user" | "admin";
};

const STORAGE_KEY = "session-user";

export function saveSession(user: SessionUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getSession(): SessionUser | null {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
}

export function clearSession() {
    localStorage.removeItem(STORAGE_KEY);
}