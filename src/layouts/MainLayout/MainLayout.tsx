import { FC } from "react";
import Header from "../../sections/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../sections/Footer/Footer";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
