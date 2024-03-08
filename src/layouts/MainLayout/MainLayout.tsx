import { FC } from "react";
import Header from "../../sections/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";
import ButtonScroll from "../../components/ButtonScroll/ButtonScroll";
import ButtonChat from "../../components/ButtonChat/ButtonChat";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ButtonScroll />
        <ButtonChat />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
