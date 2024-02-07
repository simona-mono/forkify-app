import { useAppContext } from "../../contexts/AppContext";

interface SearchBtnProps {
    gradient: boolean;
}
export default function SearchBtn({ gradient }: SearchBtnProps) {
    const { toggleMobileSearch } = useAppContext(); 
  
    return (
     <>
     <div className={gradient ? 'container--gradient' : ''}>
     <button
     type="button"
     className="btn btn--search"
     onClick={toggleMobileSearch}
     >
     <span className="sr-only">Open search</span>
     <svg className={gradient ? 'svg--white svg--shrink' : 'svg--brown'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
     </svg>
     <span className={gradient ? '' : 'hidden'}>SEARCH</span>
     </button>
     </div>
     </>
    );
  }
