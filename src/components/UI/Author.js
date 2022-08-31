import "./Author.css";

function Author(props) {
  if (props.author.tag) {
    return <h2>{props.author.name}</h2>;
  } else {
    return (
      <div className="author">
        <h5>
          {props.children} {props.author.name}
        </h5>
      </div>
    );
  }
}

export default Author;
