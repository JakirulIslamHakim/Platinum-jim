import Lottie from "lottie-react";
import RegisterImg from "../../assets/Lottie Json/Register.json";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 1024 * 1024 * 2; // 2MB
    if (!allowedTypes.includes(file.type)) {
      return "Only JPG and PNG files are allowed";
    }
    if (file.size > maxSize) {
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
            loop={true}
            className="w-3/4 mx-auto hidden md:block"
          />
        </div>
        {/* Register Form */}
        <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100  h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
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
                    value: emailRegex,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: passwordRegex,
                    message:
                      "Password must contain at least 8 characters, including uppercase, lowercase, and numbers",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                // className="input input-bordered"
                {...register("image", {
                  required: "Image is required",
                  validate: validateImage,
                })}
              />
              {errors.image && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
