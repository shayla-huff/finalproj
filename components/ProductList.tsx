import React from "react";
import type { Product } from "@/types/product";
import { causes } from "@/lib/data";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
};

export default function ProductList({ products }: Props) {
    return (
        <div>
            {products.map((product) => {
                const cause = causes.find((c) => c.id === product.causeId);
                return <ProductCard key={product.id} product={product} cause={cause} />;
            })}
        </div>
    );
}