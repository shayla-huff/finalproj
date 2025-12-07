// app/product/[id]/page.tsx
import React from "react";

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  return (
    <section>
      <h1>Product: {params.id}</h1>
      <p>Product detail placeholder for product <strong>{params.id}</strong>. Add product fetch and UI here.</p>
    </section>
  );
}
