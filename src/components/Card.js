// components
import React, { useState } from "react";
// styles
import styles from "../styles/components/Card.module.css";

const Card = (props) => {
  const [fill, setFill] = useState(false);

  return (
    <div
      className={styles.card}
      style={props.style}
      onMouseOver={() => setFill(true)}
      onMouseOut={() => setFill(false)}
    >
      {props.children}
      <img
        src="/assets/image/global/SVG/liquidShape.svg"
        alt="liquid"
        style={{ top: fill ? 0 : "100%", left: fill ? 0 : 600 }}
      />
      <h3
        className={styles.hidden}
        style={{ opacity: fill ? 1 : 0, transition: fill ? "1s" : "0.5s" }}
      >
        {props.hidden}
      </h3>
    </div>
  );
};

export default Card;
