import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, picture, years_of_experience, likes } = chef;
  return (
    <div className="rounded-lg border shadow-xl overflow-hidden flex flex-col justify-between mx-2">
      <div>
        <img className="w-full" src={picture} alt="image" />
      </div>
      <div className="p-4">
        <h3 className="font-montserrat font-bold text-2xl">{name}</h3>
        <div>
          <p className="font-montserrat font-medium mt-3">
            Experience: {years_of_experience} years
          </p>
          <p className="font-montserrat font-medium mt-3">Likes: {likes}</p>
        </div>
        <div className="mt-6">
          <Link to={`/chef/${id}`}>
            <button className="font-semibold font-montserrat btn btn-warning">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
