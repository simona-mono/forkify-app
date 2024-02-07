import MenuItem from "../atoms/MenuItem";
import { useAppContext } from "../../contexts/AppContext";

export default function MainMenu() {
    const { isMobileMenuOpen} = useAppContext(); 
  
    return (
        <div className={`${isMobileMenuOpen ? '' : 'nav__menu--hidden'} nav__menu`}>
        <ul className="nav__list">
            <MenuItem />
        </ul>
    </div>
    );
  }