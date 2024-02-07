import { useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";

export default function Header() {
    
    useEffect(() => {

    }, []); 
  
    return (
      <header className='header'>
          {/* Logo */}
          <div className="header__logo">
            <Logo />
          </div>

          {/* Search */}
          <SearchBar />

          {/* Nav */}
        <Navbar />
      </header>
    );
  }