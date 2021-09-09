// components
import Container from "../../components/Container";
// styles
import styles from "../../styles/sections/index/Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <Container>
        <div className={styles.contentHolder}>
          <div className={styles.imgHolder}>
            <img src="/assets/image/index/section2/Back.svg" alt="Me" />
          </div>
          <div>
            <h1>
              <small style={{ color: "#007a93" }}>01.</small> About Me.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className={styles.innerImgHolder}>
            <img src="/assets/image/index/section2/Me.jpg" alt="Me" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section2;
