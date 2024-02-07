import BurgerBtn from "../atoms/BurgerBtn";
import Logo from "../atoms/Logo";
import SearchBtn from "../atoms/SearchBtn";
import MainMenu from "./MainMenu";

export default function Navbar() {

    return (
        <nav className="nav">
            {/* Logo */}
            <div className="nav__logo">
             <Logo />
            </div>

            {/* Actions */}
            <div className="nav__actions">
             <SearchBtn />
             <BurgerBtn />
            </div>
                
            {/* Menu */}
             <MainMenu />
        </nav>
    );
}
