import Banner from "./components/banner";
import DropDown from "./components/DropDown";
import FieldPrice from "./components/FieldPrice";
import FieldText from "./components/FieldText";
import Form from "./components/Form";

function App() {
  const secoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];
  const marcas = [
    "HP",
    "Dell",
    "Positivo",
    "Acer",
    "Lenovo",
    "Apple",
    "Samsung",
    "outras",
  ];

  return (
    <>
      <Banner
        src="https://www.designerd.com.br/bancos-de-imagens-gratuitos/"
        nome="loja 1"
      />
      <Form className="formEstilo" marcas={marcas} secoes={secoes}></Form>
      
    </>
    
  );
}

export default App;
