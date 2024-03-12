import Lottie from "lottie-react";
import loginImg from "../../assets/Lottie Json/Login.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        {/* lottie img */}
        <div className="text-center lg:text-left md:w-1/2 ">
          <Lottie
            animationData={loginImg}
            loop={false}
            className="w-3/4 mx-auto hidden md:block"
          />
        </div>
        {/* Register Form */}
        <div className="card shrink-0 w-full md:w-1/2 md:max-w-sm shadow-2xl bg-base-100 h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Sing In
            </h2>
            {/* email input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm md:text-base">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* password input */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be 8 characters",
                    },
                  })}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-2xl md:text-3xl absolute right-3 bottom-2"
                >
                  {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </div>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm md:text-base">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* btn submit */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-red-600 text-xl hover:bg-black"
              >
                Sing In
              </button>
            </div>
            {/* sing in with fb and google */}
            <div className="text-center mt-3">
              <p>Or sign in with:</p>
              <div className="flex justify-center mt-2">
                <FaGoogle className="text-3xl text-red-500 cursor-pointer mx-2" />
                <FaFacebook className="text-3xl text-blue-500 cursor-pointer mx-2" />
              </div>
            </div>
            {/* redirect sing up page */}
            <p>
              Don&apos;t have an account ? please{" "}
              <Link
                className="text-blue-600 font-bold text-md underline"
                to={"/singUp"}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
