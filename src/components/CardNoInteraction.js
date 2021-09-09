// styles
import styles from "../styles/components/CardNoInteraction.module.css";

const CardNoInteraction = (props) => {
  return (
    <div
      className={styles.cardNoInteraction}
      style={props.style ? props.style : null}
    >
      {props.children}
    </div>
  );
};

export default CardNoInteraction;
