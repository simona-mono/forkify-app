import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";
import RecipeList from "../atoms/RecipeList";
import NoResults from "../atoms/NoResults";

export default function Bookmarks() {
    const { getSavedRecipes, savedRecipes } = useAppContext(); 

    useEffect(() => {
        getSavedRecipes();
      }, []); 
  
    return (
    <>
     <div className="menu__bookmarks">
    {savedRecipes && savedRecipes.length > 0 ? (
      <RecipeList list={savedRecipes} />
    ) : (
      <li className={savedRecipes?.length === 0 ? 'search__not-found' : 'hidden'}>
        <NoResults action="saving" highlight="recipes" />
      </li>
    )}
  </div>
    </>
    );
  }