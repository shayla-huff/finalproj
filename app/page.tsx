import React from "react";
import { products } from "@/lib/data";
import ProductList from "@/components/ProductList";

export default function Page() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section className="page-section home-page">
      <div>
        <div>
          <h1>
            Coffee that funds creativity.
          </h1>
          <p>
            Dead Poets Café is a cause-driven shop where every bag of coffee,
            cozy mug, and handmade zine supports youth literacy, local arts,
            and banned-books initiatives.
          </p>
          <p>
            Shop with intention and see exactly which causes your purchases
            support.
          </p>
        </div>
        <div className="impact-section">
          <h2 className="page-heading">Our Impact</h2>
          <ul className="impact-list">
            <li className="impact-item">Funding youth literacy programs</li>
            <li className="impact-item">Supporting local poets and artists</li>
            <li className="impact-item">Backing banned-books initiatives</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="section-heading">Featured products</h2>
        <ProductList products={featured} />
      </div>
    </section>
  );
}


