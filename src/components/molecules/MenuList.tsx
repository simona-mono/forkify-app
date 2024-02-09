import MenuItem from "../atoms/MenuItem";
import { useAppContext } from "../../contexts/AppContext";

export default function MenuList() {
    const { isMobileMenuOpen } = useAppContext(); 
  
    return (
    <div className={`${isMobileMenuOpen ? '' : 'nav__menu--hidden'} nav__menu`}>
      <ul className="menu">
        <MenuItem text="Add recipes" imgPath="../src/assets/svgs/recipe.svg" />
        <MenuItem text="Bookmarks" imgPath="../src/assets/svgs/bookmark.svg" />
        <MenuItem text="Liked" imgPath="../src/assets/svgs/like.svg" />
      </ul>
      <div className="menu__selected">
        
      </div>
    </div>
    );
  }