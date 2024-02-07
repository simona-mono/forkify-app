
interface MenuItemProps {
    text: string;
    imgPath: string;
}
export default function MenuItem({ text, imgPath }: MenuItemProps) {

    return (
        <li className="menu__item">
            <a href="#" className="item">
                {text}
                <img className="item__svg" src={imgPath} alt={text} />
            </a>
        </li>
    );
}
