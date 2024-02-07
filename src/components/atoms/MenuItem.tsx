
interface MenuItemProps {
    text: string;
    imgPath: string;
}
export default function MenuItem({ text, imgPath }: MenuItemProps) {

    return (
        <li className="menu__item">
            <a href="#" className="item">
                {text}
                <img className="svg--sunset" src={imgPath} alt={text} />
            </a>
        </li>
    );
}
