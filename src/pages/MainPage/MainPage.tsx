import { FC } from "react";
import Promo from "../../sections/Promo/Promo";
import AboutMe from "../../sections/AboutMe/AboutMe";
import WorkExamples from "../../sections/WorkExamples/WorkExamples";
import TechStack from "../../sections/TechStack/TechStack";

const MainPage: FC = () => {
  return (
    <>
      <Promo />
      <AboutMe />
      <WorkExamples />
      <TechStack />
    </>
  );
};

export default MainPage;
