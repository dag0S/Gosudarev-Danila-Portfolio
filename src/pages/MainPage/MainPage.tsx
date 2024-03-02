import { FC } from "react";
import Promo from "../../sections/Promo/Promo";
import AboutMe from "../../sections/AboutMe/AboutMe";
import WorkExamples from "../../sections/WorkExamples/WorkExamples";
import TechStack from "../../sections/TechStack/TechStack";
import Newsletter from "../../sections/Newsletter/Newsletter";

const MainPage: FC = () => {
  return (
    <>
      <Promo />
      <AboutMe />
      <WorkExamples />
      <TechStack />
      <Newsletter />
    </>
  );
};

export default MainPage;
