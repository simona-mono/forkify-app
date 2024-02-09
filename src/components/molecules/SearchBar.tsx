import { useState } from 'react';
import { useAppContext } from "../../contexts/AppContext";
import { getRecipeByQuery } from "../../services/api/apiRecipes";
import Input from "../atoms/Input";
import SearchBtn from "../atoms/SearchBtn";
import RecipeList from '../atoms/RecipeList';

export default function SearchBar() {
  const { isSearchOpen, setRecipeList, recipeList } = useAppContext(); 
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
    console.log(searchText)
  };
  
  return (
    <>
  {isSearchOpen &&
  <div className='search__results'>
    {recipeList && recipeList.length > 0 ? (
      <RecipeList list={recipeList} setSearchText={setSearchText} />
    ) : (
      <li className={recipeList?.length === 0 ? 'block' : 'hidden'}>
        No results found
      </li>
    )}
  </div>
}

    <div className={`search ${isSearchOpen ? '' : 'search--hidden'}`}>
      <form className="search__form">   
        <div className="search__input">
          <Input
            id="search-input"
            type="text"
            placeholder=""
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
