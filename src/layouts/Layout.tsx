import { Outlet } from "react-router-dom";
import Header from "../components/outside/Header";
import SideBar from "../components/outside/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <SideBar />
        <section className="p-[50px] w-full h-full">
          <Outlet />
        </section>
      </section>
    </>
  );
};
export default Layout;
