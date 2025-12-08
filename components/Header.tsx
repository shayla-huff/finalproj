import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <Link href="/" className="logo">
                    <span>
                        Dead Poets Café
                    </span>
                </Link>
                <NavBar />
            </div>
        </header>
    );
}