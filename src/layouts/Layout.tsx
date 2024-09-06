import { Outlet } from "react-router-dom";
import Header from "../components/outside/Header";
import Navigation from "../components/outside/Navigation";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <Navigation />
        <section className="p-[50px]">
          <Outlet />
        </section>
      </section>
    </>
  );
};
export default Layout;
