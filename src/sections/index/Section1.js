// components
import Container from "../../components/Container";
import Card from "../../components/Card";
// styles
import styles from "../../styles/sections/index/Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <Container>
        {/*
        <img src="/assets/image/global/SVG/logoBlack.svg" alt="" />
        */}
        <div className={styles.textHolder}>
          <h1 className="largeText">
            Hi there, I'm{" "}
            <b style={{ color: "#007a93", fontFamily: "'Cabin', sans-serif" }}>
              Pedro.
            </b>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className={styles.cardHolder}>
          <Card style={{ height: "150px", width: "150px" }} hidden="See More">
            <h3>UX/UI</h3>
          </Card>
          <Card style={{ height: "150px", width: "150px" }} hidden="See More">
            <h3>Front-end Development</h3>
          </Card>
          <Card style={{ height: "150px", width: "150px" }} hidden="See More">
            <h3>Web Design</h3>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Section1;
