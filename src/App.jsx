import { useState } from "react";

const stats = [

  { label: "Projects", value: "12" },
  { label: "Tasks completed", value: "84" },
  { label: "Team members", value: "06" },
  { label: "Active sprint", value: "04" },
];

export default function App() {
  const [active, setActive] = useState("Overview");
  const [notice, setNotice] = useState("");

  return (
    <main className="app">
      <header className="nav">
        <a className="brand" href="/" aria-label="Hawk-Pro home">Hawk-Pro</a>
        <nav className="nav-links" aria-label="Primary navigation">
          {["Overview", "Projects", "Activity"].map((item) => (
            <button
              className={active === item ? "nav-link active" : "nav-link"}
              key={item}
              aria-current={active === item ? "page" : undefined}
              type="button"
              onClick={() => {
                setActive(item);
                setNotice(`${item} view selected`);
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

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

        <div className="sr-only" role="status" aria-live="polite">{notice}</div>

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