import React from "react"
import { AppProps } from "types/type";
import Navigation from "./Navigation/navigation";



const Header = ({title}:AppProps ):JSX.Element => {
  return (
    <header className="bg-blue-700 h-20 flex">
       <h1 role="heading" className=" px-4 text-white font-bold mx-4">{title}</h1>
       <Navigation/>
    </header>
  );
};
    
 export default Header