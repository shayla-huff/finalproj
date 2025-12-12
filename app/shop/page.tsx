import React from "react";
import { products } from "@/lib/data";
import ProductList from "@/components/ProductList";

export default function Page() {
  return (
    <section className="page-section shop-page">
      <header className="shop-header">
        <h1 className="page-heading">Shop</h1>
        <p className="page-subtitle">Browse all coffee, merch, and zines. Each product shows the cause it supports</p>
      </header>

          <ProductList products={products} />
    </section>
  );
}
