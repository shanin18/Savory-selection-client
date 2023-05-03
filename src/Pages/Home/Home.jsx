import React from "react";
import AllChef from "../AllChef/AllChef";
import Banner from "../../Shared/Banner";
import Catering from "../../Shared/Catering";
import Review from "../../Shared/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllChef></AllChef>
      <Catering></Catering>
      <Review></Review>
    </div>
  );
};

export default Home;
