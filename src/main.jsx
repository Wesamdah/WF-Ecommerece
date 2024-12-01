import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css files
import "./index.css";
// components
import { store } from "./app/store.js";
import App from "./App.jsx";
import SignUp from "./layout/SignUp";
import SignIn from "./layout/SignIn";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
