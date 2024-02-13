import { Recipe } from '../../models/Recipe';

interface RecipeItemProps {
  recipe: Recipe;
  handleRecipeClick: (recipe: Recipe) => void;
}
export default function RecipeItem({ recipe, handleRecipeClick }: RecipeItemProps) {

  return ( 
    <li className='results__recipe' onClick={() => handleRecipeClick(recipe)}>
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
  );
};

