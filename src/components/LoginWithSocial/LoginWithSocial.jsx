import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginWithSocial = () => {
  const {loginWithGoogle, loginWithGithub} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLoginWithGithub = () => {
    loginWithGithub()
      .then(() => {
        navigate(from)
        toast("SignIn successfully!!");
      })
      .catch((err) => toast.err(err.message));
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        navigate(from)
        toast("SignIn successfully!!");
      })
      .catch((err) => toast.err(err.message));
  };
  
  return (
    <div>
      <div className="mt-5">
        <div
          onClick={handleLoginWithGoogle}
          className="border rounded-full flex items-center p-2 mb-2 cursor-pointer"
        >
          <img
            className="w-[37px]"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="facebook image"
          />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With Google
          </p>
        </div>
        <div
          onClick={handleLoginWithGithub}
          className="border rounded-full flex items-center p-2 cursor-pointer"
        >
          <img
            className="w-[37px]"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="facebook image"
          />
          <p className="font-montserrat font-semibold w-full text-center">
            Continue With GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginWithSocial;
