import { useEffect } from "react";
import RecipeList from "./RecipeList";
import NoResults from "../atoms/NoResults";
import { ActionType, useBookmarkContext } from "../../contexts/BookmarkContext";

export default function Bookmarks() {
    const { dispatch, savedRecipes } = useBookmarkContext(); 

    useEffect(() => {
      dispatch({ type: ActionType.GET_BOOKMARKS }); 
      }, []); 
  
    return (
    <>
    {/* on smaller devices */}
     <ul className="menu__bookmarks--mobile">
    {savedRecipes && savedRecipes.length > 0 ? (
      <RecipeList list={savedRecipes} paginate={false} />
    ) : (
      <li className={savedRecipes?.length === 0 ? 'search__not-found' : 'hidden'}>
        <NoResults action="saving" highlight="recipes" />
      </li>
    )}
  </ul>
{/* on big devices */}
  <ul className="menu__bookmarks--desktop">
    {savedRecipes && savedRecipes.length > 0 ? (
      <RecipeList list={savedRecipes} paginate={false} />
    ) : (
      <li className={savedRecipes?.length === 0 ? 'search__not-found' : 'hidden'}>
        <NoResults action="saving" highlight="recipes" />
      </li>
    )}
  </ul>
    </>
    );
  }