export default function Banner(props) {
  return (
    <header className="banner">
      <img className="banner__image" src={props.src} alt={props.nome} />
      <div className="banner__overlay" />
      <div className="banner__content">
        <h1>{props.nome}</h1>
        <p>Produtos de informática com ótimo custo-benefício</p>
      </div>
    </header>
  );
}
