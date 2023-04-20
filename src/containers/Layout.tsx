import React from "react";
import Navbar from "./Navbar";
import Social from "./Social";
import Email from "./Email";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Layout = ({ children, className = "" }: Props) => {
  return (
  
    <div className="dark:bg-black">
      <Navbar />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >
        {children}
      </main>
      <Social />
      <Email />
    </div>
    
  );
};

export default Layout;
