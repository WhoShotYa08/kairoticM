import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <ChakraProvider>
        <main>
          <Outlet />
        </main>
      </ChakraProvider>
      <ToastContainer />
    </>
  );
}
