import { useAppContext } from "../../contexts/AppContext";
import CardContent from "../atoms/card/CardContent";
import CardFooter from "../atoms/card/CardFooter";
import CardImg from "../atoms/card/CardImg";
import CardTitle from "../atoms/card/CardTitle";
import CardActions from "./CardActions";

export default function RecipeCard() {
    const { recipeDetails } = useAppContext(); 

    return (
        <>
          {recipeDetails ? (
            <div className="recipe__card">
                <div className="recipe__head">
              <CardImg src={recipeDetails.image_url} />
                <CardTitle title={recipeDetails.title} />
                </div>
                <CardActions />
                <CardContent content={recipeDetails.ingredients} />
                <CardFooter text={recipeDetails.publisher} />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      );
      
}