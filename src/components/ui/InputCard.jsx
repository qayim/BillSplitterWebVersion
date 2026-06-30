export default function InputCard({
  placeholder,
  value,
  defaultValue,
  onChange,
  inputMode = "text",
  type = "text",
}) {
  return (
    <input
      className="input-card"
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={(event) => onChange?.(event.target.value)}
      inputMode={inputMode}
      type={type}
    />
  );
}
