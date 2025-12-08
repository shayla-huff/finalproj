// app/shop/page.tsx
import React from "react";
import { products } from "@/lib/data";
import ProductList from "@/components/ProductList";

export default function Page() {
  return (
    <section className="page-section">
      <div className="product-grid">
        <h1>Shop</h1>
        <p>Browse all coffee, merch, and zines. Each product shows the cause it supports :)</p>
      </div>
      <ProductList products={products} />
    </section>
  );
}
