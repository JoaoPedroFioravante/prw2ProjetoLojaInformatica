export default function DropDown({labelText, id, options}){

    return(
        <>
        <label htmlFor={id}>{labelText}</label><br/>
        <select id={id}>
            {options.map((element)=><option key={element} value={element}>{element}</option>)}
        </select>
        </>
    );
}