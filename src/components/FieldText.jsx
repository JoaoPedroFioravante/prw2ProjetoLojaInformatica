export default function FieldText({
  labelText,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}> {labelText}</label>
      <br />
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}
