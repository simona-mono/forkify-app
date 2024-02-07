import { useAppContext } from "../../contexts/AppContext";

export default function SearchBtn() {
    const { setIsMobileMenuOpen } = useAppContext(); 

    const handleClick = () => {
        setIsMobileMenuOpen(false);
    };
  
    return (
     <>
     <button
     type="button"
     className="nav__btn nav__btn--search"
     onClick={handleClick}
     >
     <span className="sr-only">Open search</span>
     <img src="../src/assets/svgs/search.svg" alt="search" />
     </button>
     </>
    );
  }
