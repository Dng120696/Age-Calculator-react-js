export function OutputItem({ total, label }) {
  return (
    <p>
      <span className="total">{!total ? "--" : total}</span>
      <span className={label}>{label}</span>
    </p>
  );
}
