export default function FieldCondition({ value, onChange }) {
  return (
    <>
      <label htmlFor="usado"> usado </label>
      <input
        type="radio"
        name="condition"
        id="usado"
        value="usado"
        checked={value == "usado"}
        onChange={onChange}
      />
      <br />
      <label htmlFor="novo"> novo </label>
      <input
        type="radio"
        name="condition"
        id="novo"
        value="novo"
        checked={value == "novo"}
        onChange={onChange}
      />
      <br />
    </>
  );
}
