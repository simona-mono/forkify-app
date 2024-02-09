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
      <li className={recipeList?.length === 0 ? 'search__not-found' : 'hidden'}>
        <svg className="svg--sunset--big" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h0m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        <p>
        No results, <br />
        try typing <span> pizza! </span>
        </p>
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
