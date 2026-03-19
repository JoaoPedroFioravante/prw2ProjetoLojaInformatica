import Banner from './components/banner'
import DropDown from './components/DropDown';
import FieldPrice from './components/FieldPrice';
import FieldText from './components/FieldText';
import Form from './components/Form';

function App() {
  const secoes = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];
  const marcas = ["HP", "Dell", "Positivo", "Acer", "Lenovo", "Apple", "Samsung", "outras"];

  return (
    <>
    <Banner src="https://www.designerd.com.br/bancos-de-imagens-gratuitos/" nome="loja 1"/>
    <Form className="formEstilo">
      <DropDown labelText="marca do produto:" id="marcas" options={marcas}/>
      <DropDown labelText="tipo do produto:" id="tipoProduto" options={secoes}/>
      <FieldText id="textoNome" labelText="nome" placeholder="digite seu nome aqui" />
      <FieldPrice labelText="preço" id="preçoProduto" max="10000"/>
      <button>envie</button>
    </Form>
    
    </>
  );
}

export default App
