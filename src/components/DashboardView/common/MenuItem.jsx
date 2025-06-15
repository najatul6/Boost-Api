import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Users  } from "lucide-react";
import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";

const sidebarMenuItems = [
  {
    id: "overview",
    label: "Overview",
    path: "/dashboard/overview",
    icon: <LayoutDashboard />,
  },
  {
    id: "users",
    label: "Users",
    path: "/dashboard/users-control",
    icon: <Users />,
  },
  {
    id: "profile",
    label: "Profile",
    path: "/dashboard/my-profile",
    icon: <CgProfile />,
  },
];

const MenuItem = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {sidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};

MenuItem.propTypes = {
  setOpen: PropTypes.any,
};

export default MenuItem;
