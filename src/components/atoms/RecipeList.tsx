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
  setSearchText: (text: string) => void;
}

export default function RecipeList({ list, setSearchText }: RecipeListProps) {
  const { setIsSearchOpen, setRecipeList, setRecipeDetails } = useAppContext();

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
    setRecipeList([]);
    setIsSearchOpen(false);
    setSearchText(''); // Clear the search text
    getRecipe(Number(clickedRecipe.recipe_id));
  };

  return (
    <ul className='results'>
      {list.map((recipe, index) => (
        <li className='results__recipe' key={index} onClick={() => handleRecipeClick(recipe)}>
          <a href="#">
            <img className='results__recipe-pic' src={recipe.image_url} alt="recipe-pic" />
            <div className='results__recipe-info'>
              <p className='recipe-info__title'>{recipe.title}</p>
              <p className='recipe-info__publisher'>{recipe.publisher}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
