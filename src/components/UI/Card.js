import "./Card.css";

function Card(props) {
  if (props.radius === "medium") {
    return (
      <div
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={"card card-border-radius__medium " + props.className}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={"card " + props.className}
      >
        {props.children}
      </div>
    );
  }
}

export default Card;
