// styles
import styles from "../styles/components/SideNav.module.css";

const SideNav = (props) => {
  return (
    <div
      className={styles.sideNav}
      style={{
        transform: props.sideNav ? "scale(1)" : "scale(0)",
        borderRadius: props.sideNav ? "0 0 0 0" : "0 0 0 2000px",
      }}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Qualifications</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideNav;
