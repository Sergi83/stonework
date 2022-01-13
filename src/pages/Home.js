import React from "react";

// layouts (wrappers + containers)
import {
  HeaderLayout,
  AboutLayout,
  GeneralInfLayout,
  FooterLayout,
} from "../components/layouts/wrappers";

// components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../components/About";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeaderLayout>
        <Navbar />
        <Banner />
      </HeaderLayout>
      <AboutLayout>
        <About />
      </AboutLayout>
      <GeneralInfLayout>
        <Main />
      </GeneralInfLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </>
  );
};

export default Home;
