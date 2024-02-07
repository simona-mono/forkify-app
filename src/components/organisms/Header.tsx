import { useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "../atoms/Logo";

export default function Header() {
    
    useEffect(() => {

    }, []); 
  
    return (
      <header className='header'>
          {/* Logo */}
          <div className="header__logo">
            <Logo />
          </div>
        <Navbar />
      </header>
    );
  }