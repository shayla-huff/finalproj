import {causes} from "@/lib/data";

export default function Page() {
  const totalDonations = 1250;
  const totalItems = 200;

  return (
    <section className="page-section impact-page">
      <header className="impact-header">
        <h1 className="page-heading">Our Impact</h1>
        <p className="page-subtitle">
          Every purchase you make helps support creative and literary-focused causes. Here's a summary of the impact we've made together:
        </p>
      </header>

      <div className="impact-stats">
        <div className="impact-card">
          <p className="impact-label">Total donated</p>
          <p className="impact-value">${totalDonations.toLocaleString()}</p>
        </div>
        <div className="impact-card">
          <p className="impact-label">Items sold</p>
          <p className="impact-value">{totalItems}</p>
        </div>
      </div>

      <section className="impact-causes">
        <h2 className="section-heading">Causes We Support</h2>
        <div className="causes-grid">
          {causes.map((cause) => (
            <article key={cause.id} className="cause-card">
              <h3 className="cause-name">{cause.name}</h3>
              <p className="cause-description">{cause.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
