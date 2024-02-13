import MenuItem from "../atoms/MenuItem";
import { useAppContext } from "../../contexts/AppContext";
import Bookmarks from "./Bookmarks";

export default function MenuList() {
    const { isMobileMenuOpen, isSavedOpen } = useAppContext(); 
  
    return (
    <>
      <div className={`${isMobileMenuOpen ? '' : 'nav__menu--hidden'} nav__menu`}>
      <ul className="menu">
        <MenuItem text="add recipe" imgPath="../src/assets/svgs/recipe.svg" />
        <MenuItem text="bookmarks" imgPath="../src/assets/svgs/bookmark.svg">
          {<Bookmarks />}
        </MenuItem>
        <MenuItem text="likes" imgPath="../src/assets/svgs/like.svg" />
      </ul>
      </div>
    {isSavedOpen &&
      <Bookmarks />
     }
      </>
    );
  }