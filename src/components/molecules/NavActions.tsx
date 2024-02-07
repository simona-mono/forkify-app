import BurgerBtn from "../atoms/BurgerBtn";
import SearchBtn from "../atoms/SearchBtn";

export default function NavActions() {

    return (
        <>
        <div className="nav__actions">
            <SearchBtn />
            <BurgerBtn />
        </div>     
        </>
    );
}