import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart</Link>
        </nav>
    );
}