"use client";

import React from "react";
import { useCart } from "@/contexts/CartContent";

export default function Page() {
  const { items, subtotal, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <p>Your cart is empty.</p>
    );
  }
  
  return (
    <section className="page-section">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {items.map((item) => (
          <div key= {item.id} className="cart-item">
            <div className="cart-item-info">
              <strong>{item.name}</strong>
              <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-actions">
              <input type="number" min={1} value={item.quantity} onChange=  {(e) =>
                updateQuantity(item.id, Number(e.target.value))
              }/>
              <button className="btn btn-secondary" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-subtotal">
        <strong>Subtotal: </strong> ${subtotal.toFixed(2)}
      </div>
    </section>
  );
}
