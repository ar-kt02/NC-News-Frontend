import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { AuthUserProvider } from "./contexts/AuthUserContext/AuthUserContext";
import { TopicsProvider } from "./contexts/TopicsContext/TopicsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthUserProvider>
    <TopicsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TopicsProvider>
  </AuthUserProvider>,
);
