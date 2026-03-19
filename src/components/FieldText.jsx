export default function FieldText({
  labelText,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="campoForm">
      <label htmlFor={id}>{labelText}</label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
