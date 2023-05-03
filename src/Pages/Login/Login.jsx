import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithSocial from "../../components/LoginWithSocial";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [passHidden, setPassHidden] = useState(false);
  const [error, setError] = useState("")
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { loginUser, resetPassword } = useContext(AuthContext);

  const handleFormLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    if(password.length < 6){
      setError("password should be at least 6 character");
      return;
    }

    loginUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err?.message));

    form.reset();
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      resetPassword(email)
        .then(() => {
          toast.warning("please check your email");
        })
        .catch((err) => toast.error(err));
    }
    else{
      toast.error("please provide email")
    }
  };

  return (
    <div className="my-10">
      <div className="w-[570px] px-14 py-9 border border-gray-300 rounded-lg shadow-xl mx-auto">
        <h1 className="font-bold font-montserrat text-2xl mb-14 text-[#000000]">
          Login
        </h1>
        <form onSubmit={handleFormLogin}>
          <input
            className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] mb-10"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="username"
            ref={emailRef}
            required
          />
          <div className="relative mb-6">
            <input
              className="w-full font-semibold text-[#000000] placeholder:text-[#000000] font-montserrat border-0 border-b-[1px] px-0 border-[#C5C5C5] focus:ring-0 focus:border-[#C5C5C5] pr-10"
              name="password"
              type={!passHidden ? "password" : "text"}
              placeholder="Password"
              autoComplete="current-password"
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
            <small className="text-red-600 font-montserrat mt-2">{error}</small>
          </div>


          <div className="flex justify-between items-center mb-12">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  onClick={() => setChecked(!checked)}
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded-[3px] border-[2px] border-black cursor-pointer focus:ring-0 focus:ring-offset-0  "
                />
              </div>
              <label
                htmlFor="remember"
                className="pl-2 text-sm font-semibold text-gray-900 font-montserrat cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            <div>
              <p
                onClick={handleResetPassword}
                className="text-[#F9A51A] text-sm cursor-pointer font-semibold font-montserrat underline"
              >
                Forgot Password
              </p>
            </div>
          </div>
          <div>
            <button
              disabled={!checked && true}
              className="btn w-full font-montserrat bg-[#F9A51A] hover:bg-[#F9A51A] text-black border-none capitalize"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center">
          <Link
            to="/register"
            className="font-montserrat font-semibold text-sm my-4"
          >
            Don't have an account?
            <span className="text-[#F9A51A] underline ml-2">
              Create an account
            </span>
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

export default Login;
