import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="font-pacifico text-black text-center text-3xl md:text-5xl">Reviews</h2>
      <Marquee play speed={80} pauseOnHover>
        <div className="flex gap-5 py-10">
          <div className="card w-96 card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded pl-5"
                src="https://images.gr-assets.com/authors/1456905354p8/15050617.jpg"
                alt="image"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-1">
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
              </div>
              <h2 className="font-bold font-montserrat text-2xl my-3">
                Jhankar Mahbub
              </h2>
              <p className="font-montserrat">
                The steak was juicy and flavorful, and the sides were a perfect
                complement. I highly recommend it!
              </p>
            </div>
          </div>
          <div className="card w-96 card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded pl-5"
                src="https://media.licdn.com/dms/image/C4D03AQHDH20v8GaA2g/profile-displayphoto-shrink_800_800/0/1619753459617?e=2147483647&v=beta&t=8JWvkCLQhECJFjdbEeHn7qtKyQknjpT3BNZGJL_FeVs"
                alt="image"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-1">
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarHalf className="text-warning text-lg"></ImStarHalf>
              </div>
              <h2 className="font-bold font-montserrat text-2xl my-3">
                Gias Uddin
              </h2>
              <p className="font-montserrat">
                The burger was cooked just right and had all the toppings I
                wanted. It was one of the best I've ever had
              </p>
            </div>
          </div>
          <div className="card w-96 card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded pl-5"
                src="https://media.licdn.com/dms/image/C4D03AQF-5Nbs0Su6AA/profile-displayphoto-shrink_800_800/0/1631863455070?e=2147483647&v=beta&t=I9zFcpRrDEmL81VCxxAEpiu6gTBvc2dZApVNqA7erUg"
                alt="image"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-1">
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
              </div>
              <h2 className="font-bold font-montserrat text-2xl my-3">
                Mir Hussain
              </h2>

              <p className="font-montserrat">
                The pizza was delicious and had the perfect amount of cheese and
                toppings. I would order it again.
              </p>
            </div>
          </div>
          <div className="card w-96 card-side bg-base-100 shadow-xl mr-5">
            <figure>
              <img
                className="rounded pl-5"
                src="https://avatars.githubusercontent.com/u/96827394?v=4"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-1">
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarFull className="text-warning text-lg"></ImStarFull>
                <ImStarEmpty className="text-warning text-lg"></ImStarEmpty>
                <ImStarEmpty className="text-warning text-lg"></ImStarEmpty>
              </div>
              <h2 className="font-bold font-montserrat text-2xl my-3">
                Rokibul Hasan
              </h2>

              <p className="font-montserrat">
                The chicken dish was a bit dry, but the flavor was still good. I
                would give it 3 stars.
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
