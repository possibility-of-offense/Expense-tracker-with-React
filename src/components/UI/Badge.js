import "./Badge.css";

function Badge(props) {
  return (
    <div className="badge">
      <h5>{props.children}</h5>
    </div>
  );
}

export default Badge;
