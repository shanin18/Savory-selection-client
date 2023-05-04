import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllChef = () => {
  
  // set spinner conditionally
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <LoadingSpinner></LoadingSpinner>
  }
  
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("https://savory-selection-server-shanin18.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);


  return (
    <div className="my-20" id="all_Chef">
      <h2 className="font-pacifico text-black text-center text-3xl md:text-5xl mb-14">Choose your chef</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-2">
        {allChef?.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
