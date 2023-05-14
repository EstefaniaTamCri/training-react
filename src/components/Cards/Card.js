import "./Card.css";
import cards from "../../db/Cards.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleCheck,
  faDollarSign,
  faEnvelope,
  faAddressBook,
  faPhoneFlip
} from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  return cards.map((card, index) => {
    return (
      <>
        <div className="Card" key={index}>
          <div className="first">
            <img className="img" src={card.url} alt="" />
            <span className="point"></span>
            <p>{card.nombre}</p>
            <p className="job" key={index}>{card.puesto}</p>
          </div>
          <div className="hire">
            <div>
              Rate: <span className="rate" key={index}>${card.sueldoHora}/hr</span>
            </div>
            <button>Hire Me</button>
          </div>
          <div className="rating">
            <span className="square">5.0</span> &nbsp;&nbsp;
            <span>
              <FontAwesomeIcon icon={faStar} style={{ color: "#fdbd45" }} />
              &nbsp;
              <FontAwesomeIcon icon={faStar} style={{ color: "#fdbd45" }} />
              &nbsp;
              <FontAwesomeIcon icon={faStar} style={{ color: "#fdbd45" }} />
              &nbsp;
              <FontAwesomeIcon icon={faStar} style={{ color: "#fdbd45" }} />
              &nbsp;
              <FontAwesomeIcon icon={faStar} style={{ color: "#fdbd45" }} />
            </span>
            &nbsp;&nbsp;
            <span key={index}>{card.reviews}</span>
          </div>
          <div className="icons">
            <div className="container">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#8cc986" }}
              />
              <div className="name-verified">&nbsp;Verified</div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <span className="dolar">
              <FontAwesomeIcon
                icon={faDollarSign}
                style={{ color: "#8cc986" }}
              />
            </span>
            &nbsp;&nbsp;
            <span className="envelope">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#8cc986" }} />
            </span>
          &nbsp;&nbsp;
          <span className="adress">
          <FontAwesomeIcon icon={faAddressBook} style={{color: "#bcbcbc",}} />
          </span>
          &nbsp;&nbsp;
          <span className="phone">
          <FontAwesomeIcon icon={faPhoneFlip} style={{color: "#bcbcbc",}} />
          </span>
          </div>
        </div>
      </>
    );
  });
};
export default Cards;
