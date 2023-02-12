import React from "react";
import InputBox from "../videoChat/InputBox";
import Analytics from "./Analytics";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";

// import Landing from "./Landing";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      {/* <InputBox/> */}
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
};

export default Home;
