import "./Card.css";
import cards from "../db/Cards.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  return cards.map((card, index) => {
    return (
      <>
        <div className="Card" key={index}>
          <div className="first">
            <img className="img" src={card.url} alt="" />
            <span></span>
            <h2>{card.nombre}</h2>
            <h3>{card.puesto}</h3>
          </div>
          <div className="hire">
            <div>
              Rate:  <span className="dolar">${card.sueldoHora}/hr</span> 
            </div>
            <button>Hire Me</button>
          </div>
          <div className="rating">
            <span>5.0</span>{" "}
            <span>
            <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdbd45",}} />
            <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdbd45",}} />
            <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdbd45",}} />
            <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdbd45",}} />
            <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdbd45",}} />
            </span>
            <span>{card.reviews}</span>
          </div>
          <div className="icons">
            <div className="verified">
              <span>
              <FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#8cc986",}} />
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{color: "#8cc986",}} />
                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#8cc986",}} />                
                <FontAwesomeIcon icon="fa-solid fa-address-book" style={{color: "#bcbcbc",}} />
                <FontAwesomeIcon icon="fa-solid fa-address-book" style={{color: "#bcbcbc",}} />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default Cards;