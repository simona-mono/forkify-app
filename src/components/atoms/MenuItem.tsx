import { useEffect } from "react";

export default function MenuItem() {
    
    useEffect(() => {

    }, []); 
  
    return (
        <>
    <li className="nav__item">
        <a href="#" className="item">
        Add recipes
        <svg className="item__svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
        </svg>
        </a>
    </li>
    <li className="nav__item">
    <a href="#" className="item">
        Bookmarks
        <svg className="item__svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"/>
       </svg>
    </a>
</li>
<li className="nav__item">
    <a href="#" className="item">
        Liked
        <svg className="item__svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
        </svg>
    </a>
</li>
</>
    );
  }