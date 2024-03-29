import { useAppContext } from "../../../contexts/AppContext";
import { adjustQuantity } from '../../../utils/quantityUtils';

interface CardProps {
    content: string[];
}
export default function CardContent({ content }: CardProps) {
    const { servings } = useAppContext(); 

    return (
        <>
            <div className="recipe__details"></div>
            <div className="recipe__ingredients">
                <h2 className="recipe__ingredients-heading">RECIPE INGREDIENTS</h2>
                <ul className="ingredients">
                    {content && content.length > 0 ? (
                        content.map((item, index) => {
                            const words = item.split(' ');
                            const quantity = words.shift(); // remove initial recipe quantity
                            const adjustedQuantity = adjustQuantity(quantity!, servings); // add dynamic quantity based on servings

                            return (
                                <li key={index}>
                                    <svg
                                        className="svg--sunset"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m5 12 4.7 4.5 9.3-9"
                                        />
                                    </svg>
                                    <span className="ingredients__quantity">{adjustedQuantity}</span>
                                    <span className="recipe__description">{words.join(' ')}</span>
                                </li>
                            );
                        })
                    ) : (
                        <li>No recipe ingredients available</li>
                    )}
                </ul>
            </div>
        </>
    );
}
