import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ArticlesContainer from "./components/ArticlesContainer/ArticlesContainer";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/*" element={<ArticlesContainer />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;
