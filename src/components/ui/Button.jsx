import "./ui.css";

export default function Button({ children, className = "" }) {
  return <div className={`ui-button ${className}`.trim()}>{children}</div>;
}
