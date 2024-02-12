import { useState, useEffect } from 'react';
import { useAppContext } from '../../../contexts/AppContext';
import { Recipe } from '../../../models/Recipe';

export default function CardSaveBtn() {
    const [isFilled, setIsFilled] = useState(false);
    const { recipeDetails } = useAppContext(); 

    useEffect(() => {
            const bookmarksStorage = localStorage.getItem('bookmarks');
            if (bookmarksStorage && recipeDetails) {
                const bookmarks = JSON.parse(bookmarksStorage);
                const isFilled = bookmarks.some((bookmark: any) => bookmark.recipe_id === recipeDetails.recipe_id);
                setIsFilled(isFilled);
            } else {
                setIsFilled(false);
            }
    }, [recipeDetails]);
    

    const handleButtonClick = () => {
        setIsFilled(!isFilled);
    
        const bookmarksStorage = localStorage.getItem('bookmarks');
        let bookmarks = bookmarksStorage ? JSON.parse(bookmarksStorage) : [];

        if (!isFilled && recipeDetails) {
            bookmarks.push(recipeDetails);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        } else if (recipeDetails) {
            const index = bookmarks.findIndex((item: Recipe) => item.recipe_id === recipeDetails.recipe_id);
            if (index !== -1) {
                bookmarks.splice(index, 1);
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            }
        }
    };
       

    return (
        <div className="container--gradient-round">
            <button
                type="button"
                className="actions__btn--save"
                onClick={handleButtonClick}
            >
                <svg className="svg--white--big" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={isFilled ? 'white' : 'none'} viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"/>
                </svg>
            </button>
        </div>
    );
}
