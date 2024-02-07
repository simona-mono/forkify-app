import { useAppContext } from "../../contexts/AppContext";
import Input from "../atoms/Input";
import SearchBtn from "../atoms/SearchBtn";

export default function SearchBar() {
  const { isSearchOpen } = useAppContext(); 

  
    return (
      <> 
<div className={`${isSearchOpen ? '' : 'search--hidden'} search`}>
 <form className="search__form">   
       <div className="search__input">
        <Input id="search-input" type="text" placeholder="" />
        <div className="search__btn">
        <SearchBtn gradient={true} />
        </div>
        </div>
</form>
</div>
</>

    );
  }