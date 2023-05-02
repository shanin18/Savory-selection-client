import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);

  console.log(allChef);

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold font-montserrat text-center mb-10">
        Find Your Favorite Chef
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {allChef?.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chef;
