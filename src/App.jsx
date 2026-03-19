import { useState } from "react";
import "./App.css";
import bannerImg from "./assets/banner.png";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Section from "./components/Section";

function App() {
  const [eletronicos, setEletronicos] = useState([]);

  const secoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];
  const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling genérico"];

  const aoCadastrarProduto = (novoProduto) => {
    setEletronicos((anterior) => [...anterior, novoProduto]);
  };

  return (
    <main className="app">
      <Banner src={bannerImg} nome="Loja de Informática" />
      <Form
        className="formEstilo"
        marcas={marcas}
        secoes={secoes}
        aoSalvar={aoCadastrarProduto}
      />
      <Section eletronicos={eletronicos} tipo={secoes} />
    </main>
  );
}

export default App;
