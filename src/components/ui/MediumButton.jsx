export default function MediumButton({ children, active = false }) {
  return (
    <div className={`medium-button ${active ? "medium-button--active" : ""}`}>
      {children}
    </div>
  );
}
