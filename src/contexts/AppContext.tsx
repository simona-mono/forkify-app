// Import necessary modules and types
import React, { createContext, useState } from 'react';
import { Recipe } from '../models/Recipe';

type ContextType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileMenu: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSavedOpen: boolean;
  setIsSavedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileSearch: () => void;
  toggleSavedRecipes: () => void;
  recipeDetails: Recipe | null; 
  setRecipeDetails: React.Dispatch<React.SetStateAction<Recipe | null>>;
  recipeList: Recipe[] | null;
  setRecipeList: React.Dispatch<React.SetStateAction<Recipe[] | null>>;
  servings: number;
  setServings: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<ContextType>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  toggleMobileMenu: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  isSavedOpen: false,
  setIsSavedOpen: () => {},
  toggleMobileSearch: () => {},
  toggleSavedRecipes: () => {},
  recipeDetails: null, 
  setRecipeDetails: () => {},
  recipeList: null,
  setRecipeList: () => {},
  servings: 1,
  setServings: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null); 
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null); 
  const [servings, setServings] = useState(1);

  const toggleMobileMenu = () => {
    setIsSearchOpen(false);
    setIsSavedOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileMenuOpen(false);
    setIsSavedOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleSavedRecipes = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsSavedOpen(!isSavedOpen);
  };

  // Provide context value to children components
  const contextValue: ContextType = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    toggleMobileMenu,
    isSearchOpen,
    setIsSearchOpen,
    isSavedOpen,
    setIsSavedOpen,
    toggleMobileSearch,
    toggleSavedRecipes,
    recipeDetails, 
    setRecipeDetails,
    recipeList,
    setRecipeList,
    servings,
    setServings
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }

  return context;
};
