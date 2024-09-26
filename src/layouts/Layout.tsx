import { Outlet } from "react-router-dom";
import Header from "../components/outside/Header";
import SideBar from "../components/outside/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <SideBar />
        <section className="w-screen min-h-screen">
          <Outlet />
        </section>
      </section>
    </>
  );
};
export default Layout;
