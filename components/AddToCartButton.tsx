"use client";

import { useCart } from "@/contexts/CartContent";
import type { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <button onClick={() => addToCart(product)} className="btn btn-primary">
            Add to Cart
        </button>
    );
}