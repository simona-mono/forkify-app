import { useEffect } from "react";

export default function SearchBtn() {
    
    useEffect(() => {

    }, []); 
  
    return (
    <div className="nav__btn--gradient">
     <button
     type="button"
     className="nav__btn nav__btn--search"
     >
     <span className="sr-only">Open search</span>
     <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <path stroke="currentColor" stroke-linecap="round" stroke-width="2.5" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
     </svg>
     </button>
     </div>
    );
  }
