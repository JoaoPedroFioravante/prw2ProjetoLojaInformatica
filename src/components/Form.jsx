import { Children, useState } from "react";
import DropDown from "./DropDown";
import FieldPrice from "./FieldPrice";
import FieldText from "./FieldText";
import FieldCondition from "./FieldCondition";

export default function Form({className, marcas, secoes}){
    const objetoInicial = {marca: marcas[0], tipo: secoes[0], nome: "", preco: 0.00, condicao:"usado"};
    const [objeto, setObjeto] = useState(objetoInicial)
    return (
        <section className={className} onSubmit={e=> {
            e.preventDefault();
            console.log(objeto);

        }}>
            <form >
                <DropDown labelText="marca do produto:" id="marcas" options={marcas} value={objeto.marca} onChange={e=> setObjeto({...objeto, marca:e.target.value})}/><br/>
                <DropDown labelText="tipo do produto:" id="tipoProduto" options={secoes} value={objeto.tipo} onChange={e=> setObjeto({...objeto, tipo:e.target.value})}/><br/>
                <FieldText id="textoNome" labelText="nome" placeholder="digite seu nome aqui" value={objeto.nome} onChange={e=> setObjeto({...objeto, nome:e.target.value})}/><br/>
                <FieldPrice labelText="preço" id="preçoProduto" min="0.00" max="10000" value={objeto.preco} onChange={e=> setObjeto({...objeto, preco:e.target.value})}/><br/>
                <FieldCondition value={objeto.condicao} onChange={e=> setObjeto({...objeto, condicao:e.target.value})}/>
                <button>envie</button>
            </form>
        </section>
    );
}