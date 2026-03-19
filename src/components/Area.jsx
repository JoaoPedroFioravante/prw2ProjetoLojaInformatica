export default function Area({ eletronicos, nomeArea }) {
  return eletronicos.length > 0 ? (
    <>
      <div className="areaProducts">
        <h2>{nomeArea}</h2>
        <div className="products">
          {eletronicos.map((element, index) => (
            <div className="product" key={`${element.nome}-${index}`}>
              <div className="price-name-condition">
                <h3>{element.nome}</h3>
                <h4>{element.marca}</h4>
                <h4>{element.condicao}</h4>
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
