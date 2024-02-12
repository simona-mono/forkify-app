import { useAppContext } from "../../contexts/AppContext";

export default function Logo() {
  const { setIsMobileMenuOpen, setIsSavedOpen, setIsSearchOpen } = useAppContext(); 

  const handleClick = () => {
    setIsMobileMenuOpen(false);
    setIsSavedOpen(false) ;
    setIsSearchOpen(false);
  };
  
    return (
      <>
       <a onClick={handleClick} href="#" className="logo">
         <img src="../src/assets/forkify-logo.png" alt="Forkify Logo" />
       </a>
      </>
    );
  }