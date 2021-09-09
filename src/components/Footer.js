// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// styles
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </li>
        <li>
          <div className={styles.line} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
