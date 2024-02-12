import { useAppContext } from "../../contexts/AppContext";
import CardInfo from "../atoms/card/CardInfo";
import CardInfoBtn from "../atoms/card/CardInfoBtn";
import CardSaveBtn from "../atoms/card/CardSaveBtn";

export default function CardActions() {
  const { servings } = useAppContext(); 

    return (
      <>
      <div className="recipe__actions">
        <div className="recipe__details">
        <CardInfo servings={servings} minutes={30} />
        <CardInfoBtn /> 
        </div>
        <CardSaveBtn />
      </div>
      </>
    );
}