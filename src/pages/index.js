import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Experiences from "../components/Experiences/Experiences";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Website_data from "../../public/files/numberofviews";

const Home = () => {
  fetch("api/hello")
    .then((result) => result.json())
    .then((data) => {})
    .catch((err) => console.log("error", err));
  console.log("Nunmber Of unique Views", Website_data.totalUniqueViews);
  console.log("Nunmber Of total Views", Website_data.totalViews);
  console.log("Nunmber Of Ips ", Website_data.ip_requested);
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Experiences />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
