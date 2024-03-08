import { FC } from "react";
import Header from "../../sections/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";
import ButtonScroll from "../../components/ButtonScroll/ButtonScroll";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ButtonScroll />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
