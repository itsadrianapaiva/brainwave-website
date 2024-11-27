import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Benefits from "./components/Benefits.tsx";
import Collaboration from "./components/Collaboration.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Pricing from "./components/Pricing.tsx";
import Roadmap from "./components/Roadmap.tsx";
import Services from "./components/Services.tsx";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
