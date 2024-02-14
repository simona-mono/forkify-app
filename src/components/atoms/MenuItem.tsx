import { useAppContext } from "../../contexts/AppContext";
import { ReactNode } from "react";

interface MenuItemProps {
    text: string;
    imgPath: string;
    children?: ReactNode; 
}
export default function MenuItem({ text, imgPath, children }: MenuItemProps) {
    const { toggleSavedRecipes } = useAppContext(); 

    const handleClick = () => {
        // open or close mobile bookmarks
        if (text === 'bookmarks') {
            toggleSavedRecipes();
        }
    };

    const handleClickEnabled = window.innerWidth < 1024;
    const menuItemClass = text === 'bookmarks' ? 'menu__item--bookmarks group/bookmarks' : 'menu__item--' + text;

    return (
        <>
        <li onClick={handleClickEnabled ? handleClick : undefined} className={menuItemClass}>
            <a href="#" className="item">
                {text}
                <img className="svg--sunset" src={imgPath} alt={text} />
            </a>
            <div className={`list__${text}--desktop`}>
            {children}
            </div>
        </li>
        </>
    );
}
