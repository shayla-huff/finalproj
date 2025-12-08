import React from "react";
import { products } from "@/lib/data";
import ProductList from "@/components/ProductList";

export default function Page() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section>
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
        <div>
          <h2>Our Impact</h2>
          <ul>
            <li>Funding youth literacy programs</li>
            <li>Supporting local poets and artists</li>
            <li>Backing banned-books initiatives</li>
          </ul>
        </div>
      </div>

      <div>
        <h2>
          Featured products
        </h2>
        <ProductList products={featured.length ? featured : products} />
      </div>
    </section>
  );
}


