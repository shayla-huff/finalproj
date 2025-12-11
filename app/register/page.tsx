"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSession } from "@/lib/auth";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "An error occurred while registering");
      return;
    }

    saveSession(data.user);
    router.push("/account");
  }
  
  return (
    <section className="page-section auth-page">
      <h1 className="page-heading">Register</h1>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <input 
          type="email" 
          placeholder="Email" 
          className="input"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </section>
  );
}