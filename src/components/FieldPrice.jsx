export default function FieldPrice({labelText, id, max, min, value, onChange}){

    return(
        <>
        <label  htmlFor={id}>{labelText}</label><br/>
        <input  type="number" name={id} id={id} step="0.01" min={min} max={max} value={value} onChange={onChange} required/>
        </>
    );
}