export default function StatCard({ label, value }) {
  return (
    <article className="card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
