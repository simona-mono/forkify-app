import { useAppContext } from "../../contexts/AppContext";

interface SearchBtnProps {
    gradient: boolean;
    text?: string;
    onClick?: () => void;
}
export default function SearchBtn({ gradient, text, onClick }: SearchBtnProps) {
    const { toggleMobileSearch } = useAppContext(); 

    const handleClick = () => {
      if(onClick) onClick(); 
    };
  
    return (
     <>
     <div className={gradient ? 'container--gradient-round' : ''}>
     <button
     type="button"
     className="btn btn--search"
     onClick={gradient? handleClick : toggleMobileSearch }
     >
     <span className="sr-only">Open search</span>
     <svg className={gradient ? 'svg--white svg--shrink' : 'svg--brown'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
     </svg>
     <span className={gradient ? 'btn__text' : 'hidden'}>{text}</span>
     </button>
     </div>
     </>
    );
  }
