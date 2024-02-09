import CardInfo from "../atoms/card/CardInfo";
import CardInfoBtn from "../atoms/card/CardInfoBtn";
import CardSaveBtn from "../atoms/card/CardSaveBtn";

export default function CardActions() {
    return (
      <>
      <div className="recipe__actions">
        <div className="recipe__details">
        <CardInfo servings={1} minutes={30} />
        <CardInfoBtn /> 
        </div>
        <CardSaveBtn />
      </div>
      </>
    );
}