import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/">
                    <span>
                        Dead Poets Café
                    </span>
                </Link>
                <NavBar />
            </div>
        </header>
    );
}