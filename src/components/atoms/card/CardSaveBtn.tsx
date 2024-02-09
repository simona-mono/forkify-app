import { useState, useEffect } from 'react';
import { useAppContext } from '../../../contexts/AppContext';

export default function CardSaveBtn() {
    const [isFilled, setIsFilled] = useState(false);
    const { recipeDetails } = useAppContext(); 

    useEffect(() => {
        if (recipeDetails) {
            const storedRecipe = localStorage.getItem(recipeDetails.recipe_id);
            setIsFilled(!!storedRecipe);
        }
    }, [recipeDetails]);

    const handleButtonClick = () => {
        setIsFilled(!isFilled);
    
        if (!isFilled && recipeDetails) {
            localStorage.setItem(recipeDetails.recipe_id, JSON.stringify(recipeDetails));
        } else if (recipeDetails) {
            localStorage.removeItem(recipeDetails.recipe_id);
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
