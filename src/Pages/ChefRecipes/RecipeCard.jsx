import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
const RecipeCard = ({ recipe }) => {
  const [fold, setFold] = useState(false);
  const { img, cooking_method, recipe_name, ingredients, rating, favorite } =
    recipe;

  return (
    <div className="flex flex-col justify-between rounded-lg shadow-xl overflow-hidden mb-10">
      <div>
        <img className="w-full h-[235px]" src={img} alt="image" />
      </div>
      <div className="p-4">
        <h3 className="font-montserrat font-bold my-3 text-xl">
          {recipe_name}
        </h3>
        <details>
          <summary className="font-bold font-montserrat text-lg mb-2">
            ingredients:
          </summary>
          <div>
            {ingredients.map((items, index) => (
              <p key={index} className="font-montserrat">
                {index + 1}. {items}
              </p>
            ))}
          </div>
        </details>

        <div className="font-montserrat mt-3 mb-2">
          <span className="font-bold text-lg">Cooking Method:</span>{" "}
          {!fold ? (
            <p>
              {cooking_method?.substring(0, 50)}..
              <button
                onClick={() => setFold(!fold)}
                className="text-sm text-yellow-400"
              >
                See More
              </button>
            </p>
          ) : (
            <p>
              {cooking_method}
              <button
                onClick={() => setFold(!fold)}
                className="text-sm text-yellow-400"
              >
                See Less
              </button>
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Ratings:</p>
          <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
          <small>({rating})</small>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
