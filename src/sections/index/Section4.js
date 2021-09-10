// components
import Container from "../../components/Container";
import WorkCard from "../../components/WorkCard";
// styles
import styles from "../../styles/sections/index/Section4.module.css";

const Section4 = (props) => {
  return (
    <div ref={props.refs.work} className={styles.section4}>
      <Container>
        <div className={styles.contentHolder}>
          <h1>
            <small style={{ color: "#007a93" }}>03.</small> Work.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.cardHolder}>
            <WorkCard />
            <WorkCard style={{ margin: "0 20px" }} />
            <WorkCard />
          </div>
          <div className={styles.cardHolder}>
            <WorkCard />
            <WorkCard style={{ margin: "0 20px" }} />
            <WorkCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
