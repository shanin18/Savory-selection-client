import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginWithSocial from "../../components/LoginWithSocial/LoginWithSocial";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [passwordErr, setPasswordErr] = useState("");
  const [passHidden, setPassHidden] = useState(false);
  const navigate = useNavigate();

  const handleFormRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.photo_url.value;

    setPasswordErr("");
    if (password.length < 6) {
      setPasswordErr("password must be at least 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        toast("Account created successfully!!");
        updateUserProfile(result.user, name, url)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="my-10">
      <div className="w-[570px] px-14 py-9 border border-gray-300 rounded-lg shadow-xl mx-auto">
        <h1 className="font-bold font-montserrat text-2xl mb-14 text-[#000000]">
          Create an account
        </h1>
        <form onSubmit={handleFormRegister}>
          <input
            className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-8"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="username"
            required
          />
          <div className="relative">
            <input
              className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] pr-10"
              name="password"
              type={!passHidden ? "password" : "text"}
              placeholder="Password"
              autoComplete="new-password"
              required
            />
            <div className="absolute right-3 top-3">
              {!passHidden ? (
                <AiFillEye
                  className="text-xl cursor-pointer"
                  onClick={() => setPassHidden(!passHidden)}
                ></AiFillEye>
              ) : (
                <AiFillEyeInvisible
                  className="text-xl cursor-pointer"
                  onClick={() => setPassHidden(!passHidden)}
                ></AiFillEyeInvisible>
              )}
            </div>
          </div>
          <small className="text-red-600">{passwordErr}</small>
          <input
            className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mt-8"
            name="photo_url"
            type="text"
            placeholder="PhotoURL"
            required
          />

          <div>
            <button className="btn w-full font-montserrat bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize mt-12">
              Create an account
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          <Link
            to="/login"
            className="font-montserrat font-semibold text-sm my-4"
          >
            Already have an account?
            <span className="text-[#F9A51A] underline ml-2">Login</span>
          </Link>
        </div>

        <div className="divider">OR</div>

        <div>
          <LoginWithSocial></LoginWithSocial>
        </div>
      </div>
    </div>
  );
};

export default Register;
