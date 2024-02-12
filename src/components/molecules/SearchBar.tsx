import { useState } from 'react';
import { useAppContext } from "../../contexts/AppContext";
import { getRecipeByQuery } from "../../services/api/apiRecipes";
import Input from "../atoms/Input";
import SearchBtn from "../atoms/SearchBtn";
import SearchResults from './SearchResults';

export default function SearchBar() {
  const { isSearchOpen, setRecipeList } = useAppContext(); 
  const [searchText, setSearchText] = useState('');

  const getRecipeList = (text: string) => {
    getRecipeByQuery(text)
      .then((res) => {
        console.log(res);
        setRecipeList(res.data.recipes)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    setRecipeList([])
    getRecipeList(searchText);
    setSearchText('');
    console.log(searchText)
  };
  
  return (
    <>
  {isSearchOpen &&
  <SearchResults />
}

    <div className={`search ${isSearchOpen ? '' : 'search--hidden'}`}>
      <form className="search__form">   
        <div className="search__input">
          <Input
            id="search-input"
            type="text"
            placeholder="Search over 1,000,000 recipes..."
            value={searchText}
            onChange={handleInputChange}
          />
          <div className="search__btn">
            <SearchBtn
              gradient={true}
              text="SEARCH"
              onClick={handleSearch}
            />
          </div>
        </div>
      </form>
    </div>
    </>
  );
}
