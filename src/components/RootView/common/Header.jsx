import { Link, NavLink } from "react-router-dom";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import brandImg from "../../../assets/auth.png";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setIsPageLoad] = useState(false);
  const { user, logOut } = useAuth();
  const menu = [
    {
      name: "Home",
      path: "/",
      type: "public",
    },

    {
      name: "about",
      path: "/about",
      type: "public",
    },
  ];

  const handleLogOut = () => {
    toast.promise(logOut(), {
      pending: "Logging out...",
      success: "Logged out successfully",
      error: "Error logging out",
    });
  };

  return (
    <nav className="overflow-x-clip bg-muted">
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <div className="flex justify-center items-center w-[120px] h-[30px]">
            <img src={brandImg} alt="" className="w-full h-fit object-center" />
          </div>
        </Link>

        {/* menu-lg start */}
        <ul className="hidden lg:flex items-center gap-5 capitalize">
          {menu.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-500 text-orange-500 transition duration-200"
                  : "hover:border-b-2 hover:border-orange-500 transition duration-200"
              }
              key={item.path}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-5">
          {user && user?.email ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] p-[1px] border-orange-600 bg-gray-200 overflow-hidden">
                      <img
                        src={
                          user?.photoURL ||
                          "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                        }
                        alt="Profile Picture"
                      />
                    </div>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link to="my-profile">
                      <DropdownMenuItem className="cursor-pointer">
                        Profile
                        <DropdownMenuShortcut>
                          <User />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogOut}
                    className="cursor-pointer"
                  >
                    Log out
                    <DropdownMenuShortcut>
                      <LogOut />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden lg:flex items-center gap-5">
              <NavLink to="/auth/login">Login</NavLink>
              <NavLink to="/auth/register">Register</NavLink>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <div className="lg:hidden rounded-md border p-1">
            {!isMenuOpen ? (
              <RiMenuAddLine
                onClick={() => {
                  setIsMenuOpen(true);
                  setIsPageLoad(true);
                }}
                className="text-2xl cursor-pointer"
              ></RiMenuAddLine>
            ) : (
              <CgMenuMotion
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl cursor-pointer"
              ></CgMenuMotion>
            )}

            {
              <ul
                className={`capitalize w-full py-5 flex animate__animated flex-col lg:hidden gap-5 absolute z-50 bg-white/40 backdrop-blur-md  min-h-screen top-20  left-0 ${
                  isMenuOpen
                    ? "animate__fadeInLeft "
                    : isPageLoad
                    ? "animate__fadeOutRight flex "
                    : "hidden"
                } `}
              >
                {menu.map((item) => (
                  <NavLink
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-orange-500 text-orange-500 transition duration-200"
                        : "hover:border-b-2 hover:border-orange-500 transition duration-200"
                    }
                    key={item.path}
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* <hr className="w-1/3  mx-auto border-2 border-orange-500 rounded-full" /> */}
                <div
                  className={`${
                    user && user?.email ? "hidden" : "flex"
                  } flex-col gap-5 items-center border mt-5 py-2 border-orange-400`}
                >
                  <NavLink
                    to="/auth/login"
                    className="uppercase border-b-2 hover:border-orange-500 text-orange-500 transition duration-200"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/auth/registration"
                    className="uppercase border-b-2 hover:border-orange-500 text-orange-500 transition duration-200"
                  >
                    Register
                  </NavLink>
                </div>
              </ul>
            }
          </div>
          <div className="lg:hidden">
            {user?.email && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] p-[1px] border-orange-600 bg-gray-200  overflow-hidden">
                        <img
                          src={
                            user?.photoURL ||
                            "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                          }
                          alt="Profile Picture"
                        />
                      </div>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <Link to="my-profile">
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                          <DropdownMenuShortcut>
                            <User />
                          </DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem
                      onClick={handleLogOut}
                      className="cursor-pointer"
                    >
                      Log out
                      <DropdownMenuShortcut>
                        <LogOut />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
