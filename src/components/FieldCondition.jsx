export default function FieldCondition({ value, onChange }) {
  return (
    <fieldset className="campoForm condicaoFieldset">
      <legend>condição do produto</legend>

      <label className="radioItem" htmlFor="usado">
        <input
          type="radio"
          name="condition"
          id="usado"
          value="usado"
          checked={value === "usado"}
          onChange={onChange}
        />
        usado
      </label>

      <label className="radioItem" htmlFor="novo">
        <input
          type="radio"
          name="condition"
          id="novo"
          value="novo"
          checked={value === "novo"}
          onChange={onChange}
        />
        novo
      </label>
    </fieldset>
  );
}
