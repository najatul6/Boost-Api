import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import img from "@/assets/Animations/sorry.json";
const UnAuthorization = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700">401</h1>
        <h2 className="text-2xl font-bold text-gray-700">
          Unauthorized Access
        </h2>
      </div>
      <div className="flex justify-center items-center w-[350px] mx-auto">
        <Lottie animationData={img} />
      </div>
      <p className="text-center">
        You are not authorized to view this page.
      </p>

      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default UnAuthorization;
