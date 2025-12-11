"use client";

import { useState, useEffect } from "react";
import { getSession, clearSession } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (session) {
      router.push("/login");
    } else {
      setUser(session);
    }
  }, [router]);

  if (!user) return null;

  return (
    <section className="page-section">
      <h1 className="page-heading">Account</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button className="btn btn-secondary" onClick={() => {
        clearSession();
        router.push("/");
      }}
      >Log out</button>
    </section>
  );
}
