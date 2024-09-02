import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Layout Component</h1>
      <Outlet />
    </>
  );
};
export default Layout;
