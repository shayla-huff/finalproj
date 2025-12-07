// app/layout.tsx
import React from "react";
import "./globals.css";

export const metadata = {
  title: "ImpactMarket",
  description: "Cause-driven e-commerce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
          <h2 style={{ margin: 0 }}>ImpactMarket</h2>
        </header>
        <main style={{ padding: "1.5rem" }}>{children}</main>
        <footer style={{ padding: "1rem", borderTop: "1px solid #eee", marginTop: "2rem" }}>
          <small>ImpactMarket — Coffee that funds creativity.</small>
        </footer>
      </body>
    </html>
  );
}

