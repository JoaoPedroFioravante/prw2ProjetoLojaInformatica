export default function DropDown({labelText, id, options, value, onChange}){

    return(
        <>
        <label htmlFor={id}>{labelText}</label><br/>
        <select id={id} value={value} onChange={onChange}>
            {options.map((element)=><option key={element} value={element}>{element}</option>)}
        </select>
        </>
    );
}