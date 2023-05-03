import React from "react";
import AllChef from "../AllChef/AllChef";
import Banner from "../../Shared/Banner";
import Gallery from "../../Shared/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllChef></AllChef>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
