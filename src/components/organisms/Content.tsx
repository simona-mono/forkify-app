import { useAppContext } from "../../contexts/AppContext";
import RecipeCard from "../molecules/RecipeCard";
import SearchResults from "../molecules/SearchResults";

export default function Content() {
    const { isMobileMenuOpen } = useAppContext(); 

    return (
        <>
        <section className={`main ${isMobileMenuOpen ? 'recipe--blur' : ''}`}>
        {/* Search list results */}
        <SearchResults className="search__results--desktop" />

        {/* Recipe card */}
        <RecipeCard />
        </section>
        </>
    );
}