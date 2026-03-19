export default function FieldText({labelText, id, placeholder}){
    return(
        <>
        <label htmlFor={id}> {labelText}</label><br />
        <input type="text" id={id} name={id} placeholder={placeholder} required />
        </>
    )

}