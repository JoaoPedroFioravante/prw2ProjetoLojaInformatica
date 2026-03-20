import { useState } from "react";
import DropDown from "./DropDown";
import FieldPrice from "./FieldPrice";
import FieldText from "./FieldText";
import FieldCondition from "./FieldCondition";

export default function Form({ className, marcas, secoes, aoSalvar }) {
  const objetoInicial = {
    marca: marcas[0],
    tipo: secoes[0],
    nome: "",
    preco: "",
    condicao: "novo",
  };

  const [objeto, setObjeto] = useState(objetoInicial);

  const aoEnviar = (e) => {
    e.preventDefault();
    aoSalvar({
      ...objeto,
      preco: Number(objeto.preco),
    });
    setObjeto(objetoInicial);
  };

  return (
    <section className={className}>
      <h2 className="formTitulo">Cadastre um produto</h2>
      <form className="formConteudo" onSubmit={aoEnviar}>
        <DropDown
          labelText="Marca do produto:"
          id="marcas"
          options={marcas}
          value={objeto.marca}
          onChange={(e) => setObjeto({ ...objeto, marca: e.target.value })}
        />
        <DropDown
          labelText="Tipo do produto:"
          id="tipoProduto"
          options={secoes}
          value={objeto.tipo}
          onChange={(e) => setObjeto({ ...objeto, tipo: e.target.value })}
        />
        <FieldText
          id="textoNome"
          labelText="Nome do produto"
          placeholder="Digite o nome do produto"
          value={objeto.nome}
          onChange={(e) => setObjeto({ ...objeto, nome: e.target.value })}
        />
        <FieldPrice
          labelText="Preço"
          id="preçoProduto"
          placeholder="Digite o preço do produto"
          min="0.00"
          value={objeto.preco}
          onChange={(e) => setObjeto({ ...objeto, preco: e.target.value })}
        />
        <FieldCondition
          value={objeto.condicao}
          onChange={(e) => setObjeto({ ...objeto, condicao: e.target.value })}
        />
        <button className="botaoEnviar" type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
}
