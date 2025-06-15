import Lottie from "lottie-react";
import img from "../../../assets/Animations/notFound.json";
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700">
          {error?.status || "404"}
        </h1>
        <h2 className="text-2xl font-bold text-gray-700">
          {error?.statusText || " Opps! Page notFound"}
        </h2>
      </div>
      <div className="flex justify-center items-center w-[350px] mx-auto">
        <Lottie animationData={img} />
      </div>
      <p className="text-center">{error.data}</p>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Error;
