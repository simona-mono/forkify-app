export default function CardInfoBtn() {
    
    return (
      <>
     <button
      type="button"
      className="actions__btn--tiny"      
      >
        <svg className="svg--sunset--tiny" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14"/>
        </svg>
     </button>
     <button
      type="button"
      className="actions__btn--tiny"      
      >
        <svg className="svg--sunset--tiny" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7 7V5"/>
       </svg>
     </button>
     </>
    );
  }