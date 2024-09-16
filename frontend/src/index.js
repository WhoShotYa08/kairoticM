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
import "./output.css";
import 'semantic-ui-css/semantic.min.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import LandingPage from "./screens/LandingScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Dashboard from "./screens/Dashboard";

export const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginScreen />} />
      {/* <Route path="/home" element={<Dashboard />} /> */}
      {/* <Route  path="/home" element={<HomeScreen />} /> */}
      <Route path="/register" element={<SignUpScreen />} />

      <Route path="" element={<PrivateRoute/>}>
        <Route path="/home" element={<Dashboard/>}/>
      </Route>
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
