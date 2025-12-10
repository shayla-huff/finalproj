"use client";

import React from "react";
import { useCart } from "@/contexts/CartContent";

export default function Page() {
  const { items, subtotal, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <section className="page-section cart-empty">
        <h1 className="page-heading">Your Cart</h1>
        <p className="cart-empty-message">Your cart is empty.</p>
      </section>
    );
  }
  
  return (
    <section className="page-section cart-page">
      <h1 className="page-heading">Your Cart</h1>

      <div className="cart-list">
        {items.map((item) => (
          <div key= {item.id} className="cart-item">
            <div className="cart-item-info">
              <strong className="cart-item-title">{item.name}</strong>
              <p className="cart-item-meta">${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-actions">
              <label className="cart-quantity-label"> Quantity
                <input type="number" min={1} value={item.quantity} onChange=  {(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                } className="cart-quantity-input" />
              </label>

              <button onClick={() => removeFromCart(item.id)} className="btn btn-secondary">Remove</button>

            </div>
          </div>
        ))}
      </div>

      <div className="cart-subtotal">
        <span className="cart-subtotal-label">Subtotal:</span> 
        <span className="cart-subtotal-amount">${subtotal.toFixed(2)}</span>
      </div>
    </section>
  );
}
