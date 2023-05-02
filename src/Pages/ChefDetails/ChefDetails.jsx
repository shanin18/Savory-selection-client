import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const [fold, setFold] = useState(false);
  const chef = useLoaderData();
  console.log(chef);
  const { name, picture, bio, likes, number_of_recipes, years_of_experience } =
    chef;

  return (
    <div className="container mx-auto md:flex gap-10 my-20 px-2">
      <div className="md:w-2/5">
        <img className="w-full rounded-md" src={picture} alt="image" />
      </div>
      <div className="md:w-3/5 py-6 md:py-0">
        <h3 className="font-bold font-montserrat text-3xl mb-4">{name}</h3>
        <div className="mt-2 mb-5">
          {!fold ? (
            <p className="font-montserrat font-medium text-gray-600">
              {bio.substring(0, 250)}{" "}
              <button
                onClick={() => setFold(!fold)}
                className="text-yellow-400"
              >
                {" "}
                See More..
              </button>
            </p>
          ) : (
            <p className="font-montserrat font-medium text-gray-600">
              {bio}{" "}
              <button
                onClick={() => setFold(!fold)}
                className="text-yellow-400"
              >
                {" "}
                See Less..
              </button>
            </p>
          )}
        </div>
        <p className="font-montserrat font-medium my-2">Number of Recipe: {number_of_recipes}</p>
        <p className="font-montserrat font-medium my-2">Experience: {years_of_experience} Years</p>
        <p className="font-montserrat font-medium my-2">Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ChefDetails;
