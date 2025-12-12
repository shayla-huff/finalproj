"use client";

import React from "react";
import Link from "next/link";
import type { Product, Cause } from "@/types/product";
import CauseBadge from "./CauseBadge";
import { useCart } from "@/contexts/CartContent"; 

type Props = {
  product: Product;
  cause: Cause | undefined;
};

export default function ProductCard({ product, cause }: Props) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      {product.imageUrl && (
        <div className="product-image-wrapper">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
        </div>
      )}
      
      <div className="product-main">
        <Link href={`/product/${product.slug}`} className="product-name">
          <strong>{product.name}</strong>
        </Link>

        <span className="product-price">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <p className="product-description">
        {product.description}
      </p>

        {cause && <CauseBadge cause={cause} />}
        
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}

