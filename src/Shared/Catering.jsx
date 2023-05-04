import React from "react";

const Catering = () => {
  return (

    // hard coded catering section
    <div className="bg-warning">
      <div className="container mx-auto py-10">
        <div className="text-center mb-10 mt-5">
          <h2 className="font-pacifico text-white text-3xl md:text-5xl">
            Catering
          </h2>
          <h3 className="font-montserrat text-white text-xl mt-8">
            please call at least 24 hours in advance for catering orders
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-2">
          <div className="bg-white p-10 hover:shadow-2xl duration-300">
            <div className="px-10">
              <img
                className="w-50 h-50 rounded-full"
                src="https://cdn.nutritioninthekitch.com/wp-content/uploads/2020/05/IMG_6942-720x720.jpg"
                alt="image"
              />
            </div>
            <h4 className="text-2xl lg:text-3xl text-black  text-center mt-8 font-semibold font-pacifico">
              Fresh Salads
            </h4>
          </div>

          <div className="bg-white p-10 hover:shadow-2xl duration-300 ">
            <div className="px-10">
              <img
                className="w-50 h-50 rounded-full"
                src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
                alt="image"
              />
            </div>
            <h4 className="text-2xl lg:text-3xl text-black  text-center mt-8 font-semibold font-pacifico">
              Biryani
            </h4>
          </div>

          <div className="bg-white p-10 hover:shadow-2xl duration-300 ">
            <div className="px-10">
              <img
                className="w-50 h-50 rounded-full"
                src="https://hips.hearstapps.com/hmg-prod/images/twice-baked-sweet-potatoes-001-1-preview-1666837524.jpg?resize=1200:*"
                alt="image"
              />
            </div>
            <h4 className="text-2xl lg:text-3xl text-black  text-center mt-8 font-semibold font-pacifico">
              Desserts
            </h4>
          </div>
          
          <div className="bg-white p-10 hover:shadow-2xl duration-300 ">
            <div className="px-10">
              <img
                className="w-50 h-50 rounded-full"
                src="https://nishkitchen.com/wp-content/uploads/2012/06/Bengali-Fish-Curry-1B-480x480.jpg"
                alt="image"
              />
            </div>
            <h4 className="text-2xl lg:text-3xl text-black  text-center mt-8 font-semibold font-pacifico">
              Fish Items
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
