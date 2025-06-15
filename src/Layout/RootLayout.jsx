import Header from "@/components/RootView/common/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <Header />
      <hr />
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
