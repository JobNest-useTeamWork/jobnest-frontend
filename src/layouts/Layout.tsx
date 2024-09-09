import { Outlet } from "react-router-dom";

const Layout = () => {
  return (    
    <>
      <h1>Layout Component</h1>
      <section className="">
        <Outlet />
      </section>
    </>
  );
};
export default Layout;
