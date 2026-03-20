import acerLogo from "../assets/acer.svg";
import appleLogo from "../assets/apple.svg";
import hpLogo from "../assets/hp.svg";
import samsungLogo from "../assets/samsung.svg";
import xingLogo from "../assets/xing.svg";

const logosPorMarca = {
  hp: hpLogo,
  acer: acerLogo,
  apple: appleLogo,
  samsung: samsungLogo,
  "Xing Ling Genérico": xingLogo,
};

const normalizarMarca = (marca = "") => marca.toLowerCase().trim();

export default function Area({ eletronicos, nomeArea }) {
  return eletronicos.length > 0 ? (
    <>
      <div className="areaProducts">
        <h2>{nomeArea}</h2>
        <div className="products">
          {eletronicos.map((element, index) => (
            <div className="product" key={`${element.nome}-${index}`}>
              <div className="brandLogoWrap">
                <img
                  className="brandLogo"
                  src={
                    logosPorMarca[normalizarMarca(element.marca)] ?? xingLogo
                  }
                  alt={`Logo da marca ${element.marca}`}
                />
              </div>
              <div className="price-name-condition">
                <h3>Nome: {element.nome}</h3>
                <h4>Marca: {element.marca}</h4>
                <h4>Condição: {element.condicao}</h4>
                <h4 className="elementPrice">
                  {Number(element.preco).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : null;
}
