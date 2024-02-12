import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";
import RecipeList from "../atoms/RecipeList";
import NoResults from "../atoms/NoResults";

export default function SearchResults() {
    const { getSavedRecipes, recipeList } = useAppContext(); 

    useEffect(() => {
        getSavedRecipes();
      }, []); 
  
    return (
    <>
     <div className='search__results'>
    {recipeList && recipeList.length > 0 ? (
      <RecipeList list={recipeList} />
    ) : (
      <li className={recipeList?.length === 0 ? 'search__not-found' : 'hidden'}>
        <NoResults action="typing" highlight="pizza" />
      </li>
    )}
  </div>
    </>
    );
}