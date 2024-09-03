import { Outlet } from "react-router-dom";
import Header from "../components/outside/Header";
import Navigation from "../components/outside/Navigation";

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};
export default Layout;
