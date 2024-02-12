import { useAppContext } from "../../contexts/AppContext";
import RecipeCard from "../molecules/RecipeCard";

export default function Content() {
    const { isMobileMenuOpen } = useAppContext(); 

    return (
        <>
        <section className={`${isMobileMenuOpen ? 'recipe--blur' : ''}`}>
        <RecipeCard />
        </section>
        </>
    );
}