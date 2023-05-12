import "./ItemInfo.css";

const ItemInfo = (props) => {
  return (
    <div className="item-infovflex-60">
      <h2>{props.data.title}</h2>
      <small className="expense-date">{props.data.date}</small>
    </div>
  );
};
export default ItemInfo;
