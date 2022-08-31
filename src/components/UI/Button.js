import { useState, useEffect } from "react";

function Button(props) {
  const [styles, setStyles] = useState(props.styling);

  useEffect(() => {
    setStyles((prev) => ({ ...prev, cursor: "pointer" }));
  }, []);

  return (
    <button className={props.className} onClick={props.onClick} style={styles}>
      {props.children}
    </button>
  );
}

export default Button;
