import { useState } from 'react';
import { useAppContext } from "../../contexts/AppContext";
import { getRecipeById } from "../../services/api/apiRecipes";

interface Recipe {
  recipe_id: string;
  image_url: string;
  title: string;
  publisher: string;
}

interface RecipeListProps {
  list: Recipe[];
  setSearchText?: (text: string) => void;
}

export default function RecipeList({ list, setSearchText }: RecipeListProps) {
  const { setIsSearchOpen, setRecipeDetails } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

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

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul className='results'>
        {currentRecipes.map((recipe, index) => (
          <li className='results__recipe' key={index} onClick={() => handleRecipeClick(recipe)}>
            <a href="#">
              <div className='results__recipe-img'>
                <img src={recipe.image_url} alt="recipe-img" />
              </div>
              <div className='results__recipe-info'>
                <p className='recipe-info__title'>{recipe.title}</p>
                <p className='recipe-info__publisher'>{recipe.publisher}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
