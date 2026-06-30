export default function InputButton({ children, onClick, type = "button" }) {
  return (
    <button type={type} className="input-button" onClick={onClick}>
      {children}
    </button>
  );
}
