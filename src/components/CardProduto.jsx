import { useState } from "react";
import PropTypes from "prop-types";
import "./CardProduto.css"; 

function CardProduto({ imagem, marca, modelo, ano, versao, preco }) {
  const [mensagem, setMensagem] = useState("");

  function handleClick() {
    setMensagem("Quem sabe no futuro não pode ser seu 😉");
  }

  return (
    <div className="card">
      <img src={imagem} alt={`${marca} ${modelo}`} />

      <h2>{marca} {modelo}</h2>

      <p>{ano} • {versao}</p>

      <p>
        {preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button onClick={handleClick}>
        Comprar
      </button>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}

CardProduto.propTypes = {
  imagem: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
  versao: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
};

export default CardProduto;