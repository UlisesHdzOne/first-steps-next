import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      {/* Espaciado flexible entre elementos */}
      <div className="flex flex-1"></div>


      {/* Enlaces con clase para el estilo */}

      {
      navItems.map((item) => (
        //las dos formas de hacer un enlace son equivalentes
       //<ActiveLink key={item.path} path={item.path} text={item.text} /> 
       <ActiveLink key={item.path} {...item} /> 
      ))
      }

      {/*   
          
      <Link href="/about" className="ml-2 text-white">
        About
      </Link>
      <Link href="/contact" className="ml-2 text-white">
        Contact
      </Link>
      <Link href="/pricing" className="ml-2 text-white">
        Pricing
      </Link> 
      */}

    </nav>
  );
};
