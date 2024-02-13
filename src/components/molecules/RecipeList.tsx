import { useState } from 'react';
import { useAppContext } from "../../contexts/AppContext";
import { getRecipeById } from "../../services/api/apiRecipes";
import Pagination from '../atoms/Pagination';
import { Recipe } from '../../models/Recipe';
import RecipeItem from '../atoms/RecipeItem';

interface RecipeListProps {
  list: Recipe[];
  setSearchText?: (text: string) => void;
  paginate: boolean; // Define the paginate prop
}

export default function RecipeList({ list, setSearchText, paginate }: RecipeListProps) {
  const { setIsSearchOpen, setRecipeDetails } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  const getRecipe = (id: number) => {
    getRecipeById(id)
      .then((res) => {
        console.log(res.data);
        setRecipeDetails(res.data.recipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRecipeClick = (clickedRecipe: Recipe) => {
    setIsSearchOpen(false);
    if (setSearchText) setSearchText('');
    getRecipe(Number(clickedRecipe.recipe_id));
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = list.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div className='results-container'>
      {/* paginated list of recipes on big devices */}
      <div className='results-container-desktop'>
        <ul className='results'>
          {currentRecipes.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} handleRecipeClick={handleRecipeClick} />
          ))}
        </ul>
        {paginate && ( 
          <>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            recipesPerPage={recipesPerPage}
            totalRecipes={list.length}
          />
          <p className='copyright'>
          @ Copyright Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eius, reprehenderit nulla magni.
        </p>
        </>
        )}
      </div>

      {/* full list of recipes on smaller devices */}
      <div className='results-container-mobile'>
        <ul className='results'>
          {list.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} handleRecipeClick={handleRecipeClick} />
          ))}
        </ul>
      </div>
    </div>
  );
};
