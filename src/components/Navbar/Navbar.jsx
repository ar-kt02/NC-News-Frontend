import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";

const Navbar = () => {
  const { userInfo } = useContext(AuthUserContext);

  return (
    <nav className="navbar">
      <h1 className="p-2 text-left text-5xl font-bold text-red-900">NC News</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      {userInfo ? (
        <NavLink to="/profile">Profile</NavLink>
      ) : (
        <NavLink to="login">Log in</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
