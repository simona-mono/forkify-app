import MenuList from "../molecules/MenuList";
import NavActions from "../molecules/NavActions";

export default function Navbar() {

    return (
        <nav className="nav">
            {/* Actions */}
            <NavActions />
                
            {/* Menu */}
             <MenuList />
        </nav>
    );
}
