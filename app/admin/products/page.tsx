"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  
import { getSession, type SessionUser } from "@/lib/auth";

export default function Page() {
  const router = useRouter();
  const [session, setSession] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const s = getSession();

    if (!s) {
      router.push("/login");
      return;
    }

    if (s.role !== "admin") {
      router.push("/");
      return;
    }

    setSession(s);
    setLoading(false);
  }, [router]);

  if (loading) {
    return <p className="page-section">Loading...</p>
  }

  if (!session) {
    return null;
  }

  return (
    <section className="page-section admin-page">
      <header className="admin-header">
        <h1 className="page-heading">Admin — Products</h1>
        <p className="page-subtitle">Only admins can see this page. Here you can manage products.</p>
      </header>

      {/* later: list products + forms for add/edit/delete */}

    </section>
  );
}
