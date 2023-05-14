import "./Wrapper.css";

const Wrapper = (props) => {
    return (
        <div  className="cards-container">
            {props.children}
        </div>

    )
};

export default Wrapper;