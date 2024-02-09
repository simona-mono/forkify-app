import { useAppContext } from "../../contexts/AppContext";

export default function BurgerBtn() {
  const { toggleMobileMenu } = useAppContext(); 
  
    return (
     <button
      type="button"
      className="btn btn--burger"      
      onClick={toggleMobileMenu}
      >
      <span className="sr-only">Open menu</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
       </svg>
     </button>
    );
  }
