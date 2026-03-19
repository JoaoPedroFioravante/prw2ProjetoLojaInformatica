export default function DropDown({ labelText, id, options, value, onChange }) {
  return (
    <div className="campoForm">
      <label htmlFor={id}>{labelText}</label>
      <select id={id} value={value} onChange={onChange}>
        {options.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}
