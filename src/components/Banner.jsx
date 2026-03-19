
export default function Banner(props){

    return(
        <header>
            <img src={props.src} alt= {`logo da loja ${props.nome}`} />
        </header>
    );
}