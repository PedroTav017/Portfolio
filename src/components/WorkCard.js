// styles
import styles from "../styles/components/WorkCard.module.css";

const WorkCard = (props) => {
  return (
    <div
      className={styles.workCard}
      style={props.style ? props.style : null}
    ></div>
  );
};

export default WorkCard;
