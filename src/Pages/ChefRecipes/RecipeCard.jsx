import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe }) => {
  const [fold, setFold] = useState(false);
  const [disable, setDisable] = useState(false);

  const { img, cooking_method, recipe_name, ingredients, rating } =
    recipe;

  const handleFavorite = () =>{
    setDisable(!disable)
    toast("Item added to favorite!!");

  }
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
          <summary id="ingredients" className="font-bold font-montserrat text-lg mb-2 w-fit">
            ingredients:
          </summary>
          <div>
            {ingredients.map((items, index) => (
              <p key={index} className="font-montserrat">
                {index + 1}. {items}
              </p>
            ))}
          </div>
          <label htmlFor="ingredients"></label>
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
        <button disabled={disable && true } onClick={handleFavorite} className="btn btn-warning w-full mt-4 ">favorite</button>
      </div>
    </div>
  );
};

export default RecipeCard;
