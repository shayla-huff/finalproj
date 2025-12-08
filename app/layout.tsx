// app/layout.tsx
import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import LayoutContainer from "@/components/LayoutContainer";

export const metadata = {
  title: "Dead Poets Café - Coffee for a Cause",
  description: "Cause-driven e-commerce for coffee, merch, aand zines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}

