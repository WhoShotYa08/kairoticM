import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import organization from "./organization";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/bootstrap.custom.css";
import "./assets/styles.css";
import "./assets/animations.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      {/* <Route path="/contacts" element={<AuthorizeSigneesScreen />} />
      <Route path="/AuthorizeDrawings" element={<AuthorizeDrawingScreen/>}/> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={organization}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
