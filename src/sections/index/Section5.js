// components
import Container from "../../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// styles
import styles from "../../styles/sections/index/Section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.section5}>
      <Container>
        <div className={styles.contentHolder}>
          <h1>
            <small style={{ color: "#007a93" }}>04.</small> Contacts.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.contactsHolder}>
          <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span style={{marginLeft: "15px"}}><small>pedrotav017@gmail.com</small></span>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
            <img src="/assets/image/global/SVG/logo_v2.svg" alt="logo" />
            <h2>Taking the leap towards new horizons.</h2>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section5;
