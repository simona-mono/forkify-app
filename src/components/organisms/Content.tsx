import { useAppContext } from "../../contexts/AppContext";
import RecipeCard from "../molecules/RecipeCard";
import SearchResults from "../molecules/SearchResults";

export default function Content() {
    const { isMobileMenuOpen } = useAppContext(); 

    return (
        <>
        <section className={`main ${isMobileMenuOpen ? 'recipe--blur' : ''}`}>
        <SearchResults className="search__results--desktop" />
        <RecipeCard />
        </section>
        </>
    );
}