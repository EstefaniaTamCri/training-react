import "./ItemIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemIcon = (props) => {
  return (
    <div className={`item-icon ${props.size || "fa-4x"} flex-20 flex-center`}>
      <span className="fa-layers fa-fw fa-xl">
        <FontAwesomeIcon
          icon={props.icons[0]}
          className={props.classes.bgColor}
        />
        <FontAwesomeIcon
          icon={props.icons[1]}
          className={props.classes.color}
          inverse
          transform="shrink-8"
        />
      </span>
    </div>
  );
};
export default ItemIcon;
