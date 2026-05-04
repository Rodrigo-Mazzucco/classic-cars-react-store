import CardProduto from "./CardProduto";
import './ListaProdutos.css';
import Omega from "../assets/images/ChevroletOmega.png";
import OpalaDiplomata from "../assets/images/ChevroletOpalaDiplomataSE1992.png";
import OpalaSS from "../assets/images/ChevroletOpalaSS1970.png";
import Maverick from "../assets/images/FordMaverick.png";
import Puma from "../assets/images/PumaGTS.png";
import GolGTI from "../assets/images/GolGTI.png";
import FuscaBizorrão from "../assets/images/FuscaBizorrão.png";

function ListaProdutos() {
  const carros = [
    {
      imagem: Omega,
      marca: "Chevrolet",
      modelo: "Omega",
      ano: 1998,
      versao: "4.1 Sfi CD",
      preco: 100000,
    },
    {
      imagem: OpalaDiplomata,
      marca: "Chevrolet",
      modelo: "Opala",
      ano: 1992,
      versao: "4.1 Diplomata Se Collector 12v Gasolina 4p Automatico",
      preco: 200000,
    },
    {
      imagem: OpalaSS,
      marca: "Chevrolet",
      modelo: "Opala",
      ano: 1971,
      versao: "4.1 Ss 12v Gasolina 2p Manual",
      preco: 150000,
    },
    {
      imagem: Maverick,
      marca: "Ford",
      modelo: "Maverick",
      ano: 1979,
      versao: "5.0 Gt Coupe V8 16v Gasolina 2p Manual",
      preco: 300000,
    },
    {
      imagem: Puma,
      marca: "Puma",
      modelo: "GTS",
      ano: 1973,
      versao: "1.6 Conversivel 8v Gasolina 2p Manual",
      preco: 90000,
    },
    {
      imagem: GolGTI,
      marca: "Volkswagen",
      modelo: "Gol",
      ano: 1989,
      versao: "2.0 Gti 8v Gasolina 2p Manual",
      preco: 70000,
    },
    {
      imagem: FuscaBizorrão,
      marca: "Volkswagen",
      modelo: "Fusca",
      ano: 1974,
      versao: "Super Fuscão 1600 S, “Bizorrão”",
      preco: 79000,
    }
  ];

return (
    <>
      <h1 className="titulo">Produtos</h1>

     <div className="container">
        {carros.map((carro, index) => (
          <CardProduto key={index} {...carro} />
        ))}
      </div>
    </>
  );
}
export default ListaProdutos;