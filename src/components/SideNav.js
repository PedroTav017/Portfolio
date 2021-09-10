// styles
import styles from "../styles/components/SideNav.module.css";

const SideNav = (props) => {
  return (
    <div
      className={styles.sideNav}
      style={{
        top: props.sideNav ? "0" : "-100%",
      }}
    >
      <ul>
        <li onClick={() => props.executeScroll(props.refs.home)}>Home</li>
        <li onClick={() => props.executeScroll(props.refs.about)}>About</li>
        <li onClick={() => props.executeScroll(props.refs.qualifications)}>
          Qualifications
        </li>
        <li onClick={() => props.executeScroll(props.refs.work)}>Work</li>
        <li onClick={() => props.executeScroll(props.refs.contacts)}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
