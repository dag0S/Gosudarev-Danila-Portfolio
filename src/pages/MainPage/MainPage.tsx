import { FC } from "react";
import Promo from "../../sections/Promo/Promo";
import AboutMe from "../../sections/AboutMe/AboutMe";
import WorkExamples from "../../sections/WorkExamples/WorkExamples";

const MainPage: FC = () => {
  return (
    <>
      <Promo />
      <AboutMe />
      <WorkExamples />
    </>
  );
};

export default MainPage;
