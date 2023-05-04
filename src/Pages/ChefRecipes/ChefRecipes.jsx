import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import RecipeCard from "./RecipeCard";

// react lazyLoad
import LazyLoad from "react-lazy-load";

// react Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const ChefRecipes = () => {
  const [fold, setFold] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const allChef = useLoaderData();

  const {
    id,
    name,
    picture,
    bio,
    likes,
    number_of_recipes,
    years_of_experience,
  } = allChef;

  // fetching data for chefs recipes
  useEffect(() => {
    fetch("https://savory-selection-server-shanin18.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const chefRecipes = recipes?.filter((recipe) => recipe.chef_id == id);
  console.log(chefRecipes)
  return (
    <div className="container mx-auto my-20 px-2">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 border-0 border-b-4 border-b-yellow-300 rounded-xl shadow-xl px-5 md:px-10 text-center mx-2 border-t py-4 w-fit">
          About Chef
        </h2>
      </div>
      <div className=" md:flex gap-10">
        <div className="md:w-2/5">
          <LazyLoad className="min-h-full" threshold={0.90}>
            <img className="w-full rounded-md" src={picture} alt="image" />
          </LazyLoad>
        </div>
        <div className="md:w-3/5 py-6 md:py-0">
          <h3 className="font-bold font-montserrat text-3xl mb-4">{name}</h3>
          <div className="mt-2 mb-5">
            {!fold ? (
              <p className="font-montserrat font-medium text-gray-600">
                {bio.substring(0, 250)}..
                <button
                  onClick={() => setFold(!fold)}
                  className="text-yellow-400"
                >
                  See More
                </button>
              </p>
            ) : (
              <p className="font-montserrat font-medium text-gray-600">
                {bio}
                <button
                  onClick={() => setFold(!fold)}
                  className="text-yellow-400"
                >
                  See Less
                </button>
              </p>
            )}
          </div>
          <p className="font-montserrat font-medium my-2">
            Number of Recipe: {number_of_recipes}
          </p>
          <p className="font-montserrat font-medium my-2">
            Experience: {years_of_experience} Years
          </p>
          <p className="font-montserrat font-medium my-2">Likes: {likes}</p>
        </div>
      </div>

      <div className="mt-32">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 border-0 border-b-4 border-b-yellow-300 rounded-xl shadow-xl px-5 md:px-10 text-center mx-2 border-t py-4 w-fit">
            Recipes
          </h2>
        </div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={40}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {chefRecipes?.map((recipe) => (
            <SwiperSlide key={recipe.unique_id}>
              <RecipeCard recipe={recipe}></RecipeCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChefRecipes;
