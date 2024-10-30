import React from "react";
import Header from "../containers/Header/header";
import Footer from "../containers/Footer/footer";
import { Outlet, useLocation } from "react-router-dom";
import { HeroBg } from "../containers/App/app.styled";
import Hero from "../containers/Hero/hero";

const Layout = () => {
    const location = useLocation();

    return (
        <>
        {location.pathname === '/' ? (
            <>
            <HeroBg>
              <Header />
              <Hero />
            </HeroBg>
            <Outlet />
            <Footer />
          </>
        ) : (
          <>
            <Header isBlack={true}/>
            <Outlet />
            <Footer />
          </>)}
        </>
    )
}

export default Layout