import Area from "./Area";

export default function Section({eletronicos, tipo}){

    return(
        eletronicos.length > 0? 
        <section className="sectionProducts">
            {tipo.map((tipoSecao)=><Area key={tipoSecao} nomeArea={tipoSecao}
            eletronicos={eletronicos.filter((element)=>element.tipo == tipoSecao)}
            />)}
        </section>
        :null
    );
}