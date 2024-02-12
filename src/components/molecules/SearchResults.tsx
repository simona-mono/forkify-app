import { useEffect } from "react";
import RecipeList from "../atoms/RecipeList";
import NoResults from "../atoms/NoResults";
import { useAppContext } from "../../contexts/AppContext";
import { useBookmarkContext, ActionType } from "../../contexts/BookmarkContext";

export default function SearchResults() {
    const { recipeList } = useAppContext(); 
    const { dispatch } = useBookmarkContext(); 

    useEffect(() => {
        dispatch({ type: ActionType.GET_BOOKMARKS }); 
    }, []);

    return (
        <div className='search__results'>
            {recipeList && recipeList.length > 0 ? (
                <RecipeList list={recipeList} />
            ) : (
                <li className={recipeList?.length === 0 ? 'search__not-found' : 'hidden'}>
                    <NoResults action="typing" highlight="pizza" />
                </li>
            )}
        </div>
    );
}
