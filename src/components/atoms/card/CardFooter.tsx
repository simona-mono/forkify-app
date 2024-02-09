
interface CardProps {
    text: string;
}
export default function CardFooter({ text }: CardProps) {
  
    return (
    <>
     <div className="recipe__footer">
        <h2 className="recipe__footer-heading">HOW TO COOK IT</h2>
        <div className="recipe__footer-text">
        This recipe was carefully designed and tested by 
        <span className="reciper__publisher"> {text}</span>. 
        Please check out directions at their website.
        </div>
        <div className='container--gradient-round'>
         <button type="button" className="btn btn--directions">
          <span>DIRECTIONS</span>
          <svg className="svg--white--tiny" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
         </button>
         </div>
        </div>
    </>
    );
  }