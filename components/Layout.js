import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <main className="flex justify-center items-center flex-col h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-900 via-orange-200 to-violet-500">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
