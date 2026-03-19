export default function FieldPrice({labelText, id, max}){

    return(
        <>
        <label  htmlFor={id}>{labelText}</label><br/>
        <input  type="number" name={id} id={id} step="0.01" max={max} required/>
        </>
    );
}