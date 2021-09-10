// components
import Container from "../../components/Container";
import CardNoInteraction from "../../components/CardNoInteraction";
// styles
import styles from "../../styles/sections/index/Section3.module.css";

const Section3 = (props) => {
  return (
    <div ref={props.refs.qualifications} className={styles.section3}>
      <Container>
        <div className={styles.contentHolder}>
          <h1>
            <small style={{ color: "#007a93" }}>02.</small> Qualifications.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <div className={styles.cardHolder}>
            {/********/}
            <CardNoInteraction style={{ borderRadius: "10px 0 0 10px" }}>
              <h3>UX/UI</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <h4>Methods</h4>
              <br />
              <h4>UX/UI Tools</h4>
            </CardNoInteraction>
            {/********/}
            <CardNoInteraction
              style={{
                borderLeft: "1px solid lightgrey",
                borderRight: "1px solid lightgrey",
              }}
            >
              <h3>Front-end Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <h4>Languages</h4>
              <br />
              <h4>Dev Tools</h4>
            </CardNoInteraction>
            {/********/}
            <CardNoInteraction style={{ borderRadius: "0 10px 10px 0" }}>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <h4>What I Design</h4>
              <br />
              <h4>Design Tools</h4>
            </CardNoInteraction>
            {/********/}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section3;
