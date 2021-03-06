// components
import { Spiral as Hamburger } from "hamburger-react";
// styles
import styles from "../styles/components/Navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <div className={styles.logoHolder}>
        <img src="/assets/image/global/SVG/logo_v2.svg" alt="" />
        <small>
          Pedro <br /> Tavares
        </small>
      </div>
      <div onClick={props.sideNavHandler} className={styles.menuIcon}>
        <Hamburger size={20} toggled={props.sideNav} />
      </div>
    </>
  );
};

export default Navbar;
