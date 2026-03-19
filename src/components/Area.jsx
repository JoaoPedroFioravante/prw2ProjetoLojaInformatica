export default function Area({eletronicos, nomeArea}){
    return(
        eletronicos>0?
        <>
        <div className="areaProducts">
            <h2>{nomeArea}</h2>
            <div className="products">
                {eletronicos.map((element)=> <div className="product">
                    <div className="imageProduct">
                        <img src={element.img} alt={`imagem da logo da ${element.tipo}`}/>
                    </div>
                    <div className="price-name-condition">
                        <h3>{element.name}</h3>
                        <h4>{element.condition}</h4>
                        <h4 className="elementPrice">{element.preco}</h4>
                    </div>
                </div>)}
            </div>
        </div>
        
            
        </>:null
    )
}