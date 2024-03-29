import { useEffect } from "react";
import Header from "../components/organisms/Header";
import { getRecipeById } from "../services/api/apiRecipes";
import { useAppContext } from "../contexts/AppContext";
import Content from "../components/organisms/Content";
import AddModal from "../components/molecules/AddModal";

export default function Home() {
  const { setRecipeDetails } = useAppContext(); 

  const getRecipe = (id?: number) => {
    const defaultId = id ? id : 41470 ;
    getRecipeById(defaultId)
    .then((res) => {
     // console.log(res.data);
     setRecipeDetails(res.data.recipe);
    })
    .catch((err) => {
      console.log(err);
    });
  };
    
    useEffect(() => {
      getRecipe();
    }, []); 
  
    return (
      <div className='home'>
        <Header />
        <Content />
       <AddModal /> 
      </div>
    );
  }