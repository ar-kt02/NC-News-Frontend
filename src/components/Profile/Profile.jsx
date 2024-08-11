import { useContext } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const { userInfo, logoutUser } = useContext(AuthUserContext);
  const navigate = useNavigate();

  if (!userInfo) {
    return (
      <p className="m-5 text-center text-red-600">
        You must log in to access this page.
      </p>
    );
  }

  const handleLogOut = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <section className="mt-5 flex flex-col items-center justify-center space-y-3 text-center">
      {userInfo && (
        <>
          <div className="flex flex-col items-center space-y-2 rounded border px-20 py-5">
            <button
              className="flex items-center gap-1 text-[17px] text-gray-700 hover:text-gray-900 hover:underline"
              type="submit"
              onClick={handleLogOut}
            >
              Log Out
              <LogoutIcon fontSize="small" />
            </button>
            <p className="text-6xl font-light">{userInfo.name}</p>
            <img
              className="w-20 rounded-full border"
              src={userInfo.avatar_url}
              alt="Avatar"
            />
            <p className="text-gray-700">@{userInfo.username}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
