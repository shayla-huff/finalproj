import Link from "next/link";
import React from "react";
import type { Product, Cause } from "@/types/product";
import CauseBadge from "./CauseBadge";

type Props = {
    product: Product;
    cause: Cause | undefined;
};

export default function ProductCard({ product, cause }: Props) {
    return (
        <div>
            <div>
                [ Image Placeholder ]
            </div>
            <div>
                <Link href={`/product/${product.slug}`}>
                    <strong>{product.name}</strong>
                </Link>
                <span>${product.price.toFixed(2)}</span>
                {cause && <CauseBadge cause={cause} />}
            </div>

            <p style = {{ fontSize: "0.85rem", color: "#555" }}>
                {product.description}
            </p>
        </div>
    );
}