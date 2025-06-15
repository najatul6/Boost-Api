import Lottie from "lottie-react";
import animation from "../assets/Animations/loginAnimation.json";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const logIn = pathname.includes("login");
  // const register=pathname.includes("register")
  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden lg:flex justify-center items-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Something Special is waiting for you
          </h1>
          <div className="w-full">
            <Lottie animationData={animation} />
            <div className="">
              {logIn ? (
                <div className="text-center">
                  <p className="">
                    Don&apos;t have an account?
                    <Link
                      to="/auth/register"
                      className="font-medium text-[#c5d9ff] hover:underline ml-2"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              ) : (
                // <Link to={"/auth/login"}>Log in</Link>
                <div className="text-center">
                  <p className="">
                    Already have an account?
                    <Link
                      to="/auth/login"
                      className="font-medium text-[#c5d9ff] hover:underline ml-2"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
        <div className="lg:hidden">
          {logIn ? (
            <div className="text-center">
              <p className="">
                Don&apos;t have an account?
                <Link
                  to="/auth/register"
                  className="lg:font-medium font-bold lg:text-[#c5d9ff]  hover:underline ml-2"
                >
                  Create Account
                </Link>
              </p>
            </div>
          ) : (
            // <Link to={"/auth/login"}>Log in</Link>
            <div className="text-center">
              <p className="">
                Already have an account?
                <Link
                  to="/auth/login"
                  className="lg:font-medium font-bold lg:text-[#c5d9ff] hover:underline ml-2"
                >
                  Log In
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
