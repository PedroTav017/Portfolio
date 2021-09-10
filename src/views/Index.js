// sections
import Section1 from "../sections/index/Section1";
import Section2 from "../sections/index/Section2";
import Section3 from "../sections/index/Section3";
import Section4 from "../sections/index/Section4";
import Section5 from "../sections/index/Section5";

const Index = (props) => {
  return (
    <>
      <Section1 refs={props.refs} />
      <Section2 refs={props.refs} />
      <Section3 refs={props.refs} />
      <Section4 refs={props.refs} />
      <Section5 refs={props.refs} />
    </>
  );
};

export default Index;
