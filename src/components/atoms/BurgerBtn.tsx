import { useAppContext } from "../../contexts/AppContext";

export default function BurgerBtn() {
  const { toggleMobileMenu } = useAppContext(); 
  
    return (
     <button
      type="button"
      className=" nav__btn nav__btn--burger"      
      onClick={toggleMobileMenu}
      >
      <span className="sr-only">Open menu</span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
     </button>
    );
  }
