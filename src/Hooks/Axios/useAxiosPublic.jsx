import axios from "axios";

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
  });

  return axiosInstance;
};

export default useAxiosPublic;
