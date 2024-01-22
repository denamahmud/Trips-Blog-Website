import { lazy } from "react";

const FaqComponent = lazy(() => import("../components/FaqComponent"));
const TitleAboutPage = lazy(() => import("../components/about/TitleAboutPage"));
const AboutSection = lazy(() => import("../components/about/AboutSection"));

function About({ about }) {
  return (
    <div className="font-montserrat">
      <TitleAboutPage name="About" />
      <AboutSection about={about} />
      <FaqComponent />
    </div>
  );
}

export default About;
