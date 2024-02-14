import MenuItem from "../atoms/MenuItem";
import { useAppContext } from "../../contexts/AppContext";
import Bookmarks from "./Bookmarks";

export default function MenuList() {
    const { isMobileMenuOpen, isSavedOpen } = useAppContext(); 
  
    return (
    <>
      <div className={`${isMobileMenuOpen ? '' : 'nav__menu--hidden'} nav__menu`}>
      <ul className="menu">
        <MenuItem text="add recipe" imgPath="/assets/svgs/recipe.svg" />
        <MenuItem text="bookmarks" imgPath="/assets/svgs/bookmark.svg">
          {<Bookmarks />}
        </MenuItem>
        <MenuItem text="likes" imgPath="/assets/svgs/like.svg" />
      </ul>
      </div>
    {isSavedOpen &&
      <Bookmarks />
     }
      </>
    );
  }