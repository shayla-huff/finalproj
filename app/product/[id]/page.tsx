// app/product/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { products, causes } from "@/lib/data"; 
import AddToCartButton from "@/components/AddToCartButton";

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  const product = products.find((p) => p.slug === params.id);
  if (!product) {
    return notFound();
  }

  const cause = causes.find((c) => c.id === product.causeId);
  
  return (
    <section>
      <div>
        [Product Image]
      </div>

      <div>
        <h1>
          {product.name}
        </h1>
        <span>
          ${product.price.toFixed(2)}
        </span>

        {cause && (
          <div>
            <strong>This purchase supports:</strong>
            <div>{cause.name}</div>
            <p>{cause.description}</p>
          </div>
        )}

        <p>
          {product.description}
        </p>

        <button>
          <AddToCartButton product={product} />
        </button>
      </div>

    </section>
  );
}
