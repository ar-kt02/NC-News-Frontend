import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const { userInfo } = useContext(AuthUserContext);

  const NavDefault = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:underline ${isActive ? "text-gray-900 underline" : ""}`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="position: fixed top-0 flex w-full flex-row items-center justify-between border bg-white px-6 py-4">
      <NavLink to="/" className="text-4xl font-bold">
        <h1>N+</h1>
      </NavLink>
      <nav className="flex justify-center gap-3 text-base text-sm">
        <NavDefault to="/">
          <HomeIcon />
          Home
        </NavDefault>
        <NavDefault to="/articles">
          <NewspaperIcon />
          Articles
        </NavDefault>
        <NavDefault to={userInfo ? "/profile" : "/login"}>
          <AccountBoxIcon />
          {userInfo ? "Profile" : "Log in"}
        </NavDefault>
      </nav>
    </header>
  );
};

export default Navbar;
