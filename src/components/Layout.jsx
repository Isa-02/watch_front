import { Link, Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <>
    <header>
      <Link to="/" className="link"> Каталог</Link>
      <Link to="/contacts" className="link">О нас</Link>
      <Link to="/carts" className="link"> Адрес </Link>
    </header>

    <Outlet/>

    <footer>2022</footer>
    </>
  );
};

export default Layout;
