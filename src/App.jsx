import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/" element={<Articles />}></Route>
        <Route path="/articles/:articleId" element={<Article />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
