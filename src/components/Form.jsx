import { Children } from "react";

export default function Form({className, children}){

    return (
        <section className={className}>
            <form >
                {children.map((element)=> <>{element} <br/></>)}
            </form>
        </section>
    );
}