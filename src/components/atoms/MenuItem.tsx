import { useAppContext } from "../../contexts/AppContext";

interface MenuItemProps {
    text: string;
    imgPath: string;
}
export default function MenuItem({ text, imgPath }: MenuItemProps) {
    const { toggleSavedRecipes, isSavedOpen } = useAppContext(); 

    const handleClick = () => {
        if (text === 'Bookmarks') {
            toggleSavedRecipes();
            console.log(isSavedOpen)
        }
    };

    return (
        <>
        <li onClick={handleClick} className="menu__item">
            <a href="#" className="item">
                {text}
                <img className="svg--sunset" src={imgPath} alt={text} />
            </a>
        </li>
        </>
    );
}
