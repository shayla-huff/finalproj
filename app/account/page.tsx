"use client";

import { useState, useEffect } from "react";
import { getSession, clearSession, type SessionUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const [session, setSession] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const s = getSession();

    if (!s) {
      router.push("/login");
    } else {
      setSession(s);
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return <p className="page-section">Loading...</p>;
  }

  if (!session) {
    return null;
  }

  function handleLogout() {
    clearSession();
    setSession(null);
    router.push("/");
  }

  return (
    <section className="page-section account-page">
      <header className="account-header">
        <h1 className="page-heading">Your Account</h1>
        <button onClick={handleLogout} className="btn btn-secondary">
          Log Out
        </button>
      </header>

      <div className="account-info">
        <p><strong>Email:</strong> {session.email}</p>
      </div>

      <section className="account-orders">
        <h2 className="section-heading">Your Orders</h2>
        <p className="muted">
          Order history coming soon. For now, your account demonstrates protected
          routing and login status.
        </p>
      </section>
    </section>
  );
}
