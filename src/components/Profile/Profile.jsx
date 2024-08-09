import { useContext } from "react";
import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import { useNavigate } from "react-router-dom";

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
          <div className="flex justify-end rounded-lg bg-[#172554] px-3 py-1 text-white hover:opacity-90">
            <button type="submit" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded border px-20 py-5">
            <p className="font-medium">Hello, {userInfo.name}!</p>
            <img
              className="w-20 rounded-full border"
              src={userInfo.avatar_url}
              alt="Avatar"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
