import { AuthUserContext } from "../../contexts/AuthUserContext/AuthUserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { userInfo, loginUser } = useContext(AuthUserContext);

  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username) {
      setIsLoading(true);
      setErrorMsg("");
      loginUser(username)
        .then(() => {
          setIsLoading(false);
          navigate("/profile");
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMsg(err.response.data.msg);
        });
    }
  };

  const handleTestLogin = () => {
    setIsLoading(true);
    setErrorMsg("");

    loginUser("jessjelly")
      .then(() => navigate("/profile"))
      .catch((err) => {
        setIsLoading(false);
        setErrorMsg(err.response.data.msg);
      });
  };

  if (userInfo) {
    return (
      <p className="m-5 text-center text-red-600">You are already logged in.</p>
    );
  }

  return (
    <section className="flex flex-col items-center p-5">
      <h3 className="font-bold">Log In</h3>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-3 rounded-md p-4 shadow-md"
      >
        <input
          type="text"
          placeholder="Enter username..."
          value={username}
          onChange={handleUsernameInput}
          required
          className="rounded-md border border-red-100 p-2"
          autoComplete=""
        ></input>
        <input
          type="password"
          placeholder="Enter password..."
          className="rounded-md border border-red-100 p-2"
          autoComplete=""
        />

        <button className="rounded-md bg-red-600 py-1 text-white" type="submit">
          Log In
        </button>
        <button
          className="rounded-md bg-red-600 py-1 text-white"
          type="button"
          onClick={handleTestLogin}
        >
          Default User
        </button>
      </form>
      {isLoading && <p className="mt-2">Loading...</p>}
      {errorMsg && <p className="mt-2 text-red-600">{errorMsg}.</p>}
    </section>
  );
};

export default Login;
