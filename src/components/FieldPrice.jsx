export default function FieldPrice({
  labelText,
  id,
  max,
  min,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="campoForm">
      <label htmlFor={id}>{labelText}</label>
      <input
        type="number"
        name={id}
        id={id}
        placeholder={placeholder}
        step="0.01"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
