"use client";

import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, clearSession, type SessionUser } from "@/lib/auth";
import type { Product } from "@/types/product";

type ProductFormState = {
  id?: string;
  name: string;
  slug: string;
  price: string; // keep as string for the input, convert to number when sending
  imageUrl: string;
  category: string;
  description: string;
  causeId: string;
  isFeatured: boolean;
};

export default function Page() {
  const router = useRouter();
  const [session, setSession] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<ProductFormState>({
    name: "",
    slug: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    causeId: "",
    isFeatured: false,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  // Protect route: only admin can access
  useEffect(() => {
    const s = getSession();
    if (!s) {
      router.push("/login");
      return;
    }
    if (s.role !== "admin") {
      router.push("/");
      return;
    }
    setSession(s);
  }, [router]);

  // Load products once admin is set
  useEffect(() => {
    if (!session) return;

    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [session]);

  function resetForm() {
    setForm({
      name: "",
      slug: "",
      price: "",
      imageUrl: "",
      category: "",
      description: "",
      causeId: "",
      isFeatured: false,
    });
    setEditingId(null);
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

    function handleFeaturedChange(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    setForm((prev) => ({
      ...prev,
      isFeatured: checked,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const payload = {
        name: form.name,
        slug: form.slug,
        price: Number(form.price),
        imageUrl: form.imageUrl,
        category: form.category,
        description: form.description,
        causeId: form.causeId,
        isFeatured: form.isFeatured,
      };

      let res: Response;
      if (editingId) {
        // Update existing product
        res = await fetch(`/api/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // Create new product
        res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Error saving product");
        return;
      }

      // Refresh product list
      const refreshed = await fetch("/api/products");
      const refreshedData = await refreshed.json();
      setProducts(refreshedData);
      resetForm();
    } catch (err) {
      console.error(err);
      setError("Error saving product");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(product: Product) {
    setEditingId(product.id);
    setForm({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: String(product.price),
      imageUrl: product.imageUrl ?? "",
      category: product.category,
      description: product.description ?? "",
      causeId: product.causeId,
      isFeatured: product.isFeatured ?? false,
    });
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm("Delete this product?");
    if (!confirmed) return;

    setError("");
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Error deleting product");
        return;
      }
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      setError("Error deleting product");
    }
  }

  function handleLogout() {
    clearSession();
    setSession(null);
    router.push("/");
  }

  if (loading) {
    return <p className="page-section">Loading admin dashboard...</p>;
  }

  if (!session) {
    return null;
  }

  return (
    <section className="page-section admin-page">
      <header className="admin-header">
        <h1 className="page-heading">Admin — Products</h1>
        <div className="admin-header-actions">
          <span className="muted">Logged in as {session.email}</span>
          <button onClick={handleLogout} className="btn btn-secondary">
            Log Out
          </button>
        </div>
      </header>

      {error && <p className="form-error">{error}</p>}

      {/* Products table */}
      <div className="admin-products-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Category</th>
              <th>Cause</th>
              <th>Price</th>
              <th>Featured?</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && (
              <tr>
                <td colSpan={7} className="muted">
                  No products yet.
                </td>
              </tr>
            )}
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.slug}</td>
                <td>{product.category}</td>
                <td>{product.causeId}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.isFeatured ? "Yes" : "No"}</td>
                <td className="admin-actions-cell">
                  <button
                    type="button"
                    className="btn btn-small"
                    onClick={() => startEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-small btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create / edit form */}
      <section className="admin-form-section">
        <h2 className="section-heading">
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <label>
              Name
              <input
                className="input"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Slug
              <input
                className="input"
                name="slug"
                value={form.slug}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Price
              <input
                className="input"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Category
              <input
                className="input"
                name="category"
                value={form.category}
                onChange={handleInputChange}
                placeholder="coffee / merch / zine"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Cause ID
              <input
                className="input"
                name="causeId"
                value={form.causeId}
                onChange={handleInputChange}
                placeholder="e.g., youth-literacy"
                required
              />
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleFeaturedChange}
              />
              Featured product
            </label>
          </div>

          <label>
            Image URL
            <input
              className="input"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleInputChange}
              placeholder="/images/midnight-manuscript.jpg"
            />
          </label>

          <label>
            Description
            <textarea
              className="textarea"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              rows={3}
            />
          </label>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={saving}
            >
              {saving
                ? editingId
                  ? "Saving..."
                  : "Creating..."
                : editingId
                ? "Save Changes"
                : "Create Product"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>
    </section>
  );
}

