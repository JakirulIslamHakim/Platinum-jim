import Lottie from "lottie-react";
import RegisterImg from "../../assets/Lottie Json/Register.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let userInfo = { ...data };
    userInfo.role = "member";
    console.log(userInfo);
  };

  const validateImage = (file) => {
    if (!file || !file[0]) return "Image is required";
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 1024 * 1024 * 2; // 2MB
    const selectedFile = file[0];
    if (!allowedTypes.includes(selectedFile.type)) {
      return "Only JPG and PNG files are allowed";
    }
    if (selectedFile.size > maxSize) {
      return "Image size exceeds 2MB limit";
    }
    return true;
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        {/* lottie img */}
        <div className="text-center lg:text-left md:w-1/2 ">
          <Lottie
            animationData={RegisterImg}
            loop={false}
            className="w-3/4 mx-auto hidden md:block"
          />
        </div>
        {/* Register Form */}
        <div className="card shrink-0 w-full md:w-1/2 md:max-w-sm shadow-2xl bg-base-100 h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Sing up
            </h2>
            {/* name input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm md:text-base">
                  {errors.name.message}
                </span>
              )}
            </div>
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
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm md:text-base">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* image input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                className="file-input input-bordered file-input-error file-input-sm md:file-input-md"
                {...register("image", {
                  required: "Image is required",
                  validate: validateImage,
                })}
              />
              {errors.image && (
                <span className="text-red-500 text-sm md:text-base">
                  {errors.image.message}
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
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message:
                        "Password must contain at least 8 characters, including uppercase, lowercase, and numbers",
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
                className="btn btn-primary mb-2 bg-red-600 text-xl hover:bg-black hover:tex"
              >
                Sing Up
              </button>
            </div>
            {/* redirect sing in page */}
            <p>
              Already Have an account ? please{" "}
              <Link
                className="text-blue-600 font-bold text-md underline"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
