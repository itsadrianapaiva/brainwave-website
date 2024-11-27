import Heading from "./Heading";
import Section from "./Section";

const Roadmap: React.FC = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on"/>
      </div>
    </Section>
  );
};

export default Roadmap;
