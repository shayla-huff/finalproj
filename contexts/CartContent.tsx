"use client"

import type { Product } from "@/types/product";
import { createContext, useState, useEffect, useContext } from "react";

type CartItem = Product & {
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setItems(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(id: string) {
        setItems((prev) => prev.filter((i) => i.id !== id));
    }

    function updateQuantity(id:string, quantity: number) {
        if (quantity < 1) return;
        setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, quantity } : i))
        );
    }

    const subtotal = items.reduce (
        (sum, item) => sum + item.price * item.quantity, 0
    );

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, subtotal }}>
            {children}
        </CartContext.Provider>
    );
}  

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}