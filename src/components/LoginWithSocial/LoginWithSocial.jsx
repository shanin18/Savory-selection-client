import React, { useContext } from "react";
import facebook from "/icons/fb.png"
import google from "/icons/google.png"
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const LoginWithSocial = () => {
  // const { signUpWithGoogle, signUpWithFacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/"

  const handleSignInWithFacebook = () => {
    // signUpWithFacebook()
    //   .then(() => {
    //     navigate(from)
    //     console.log("SignIn successfully!!");
    //   })
    //   .catch((err) => console.log(err.message));
  };

  const handleSignInWithGoogle = () => {
    // signUpWithGoogle()
    //   .then(() => {
    //     navigate(from)
    //     console.log("SignIn successfully!!");
    //   })
    //   .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="mt-5">
        <div
          onClick={handleSignInWithFacebook}
          className="border rounded-full flex items-center p-2 mb-2 cursor-pointer"
        >
          <img className="w-[37px]" src={facebook} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Facebook
          </p>
        </div>
        <div
          onClick={handleSignInWithGoogle}
          className="border rounded-full flex items-center p-2 cursor-pointer"
        >
          <img className="w-[37px]" src={google} alt="facebook image" />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginWithSocial;
