import { useState } from "react";

const stats = [
  { label: "Projects", value: "12" },
  { label: "Tasks completed", value: "84" },
  { label: "Team members", value: "06" },
];

export default function App() {
  const [active, setActive] = useState("Overview");

  return (
    <main className="app">
      <nav className="nav">
        <div className="brand">Hawk-Pro</div>
        <div className="nav-links">
          {["Overview", "Projects", "Activity"].map((item) => (
            <button
              className={active === item ? "nav-link active" : "nav-link"}
              key={item}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">CONTROL CENTER</p>
        <h1>Build. Track. Ship.</h1>
        <p className="subtitle">
          A lightweight React workspace for keeping your projects moving.
        </p>

        <div className="stats">
          {stats.map((stat) => (
            <article className="card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <section className="activity">
          <div>
            <p className="eyebrow">CURRENT VIEW</p>
            <h2>{active}</h2>
          </div>
          <p className="muted">Hawk-Pro is ready for the next improvement.</p>
        </section>
      </section>
    </main>
  );
}