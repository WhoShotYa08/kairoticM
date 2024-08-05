import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Dashboard from "./screens/Dashboard";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      <ToastContainer/>
    </>
  );
}
