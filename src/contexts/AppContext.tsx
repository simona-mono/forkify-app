// Import necessary modules and types
import React, { createContext, useState, useEffect } from 'react';
import { Recipe } from '../models/Recipe';

// Define the type for context
type ContextType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileMenu: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSavedOpen: boolean;
  setIsSavedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getSavedRecipes: () => void;
  toggleMobileSearch: () => void;
  toggleSavedRecipes: () => void;
  recipeDetails: Recipe | null; 
  setRecipeDetails: React.Dispatch<React.SetStateAction<Recipe | null>>;
  recipeList: Recipe[] | null;
  setRecipeList: React.Dispatch<React.SetStateAction<Recipe[] | null>>;
  savedRecipes: Recipe[];
};

// Create context with a default value
export const AppContext = createContext<ContextType>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  toggleMobileMenu: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  isSavedOpen: false,
  setIsSavedOpen: () => {},
  getSavedRecipes: () => {},
  toggleMobileSearch: () => {},
  toggleSavedRecipes: () => {},
  recipeDetails: null, 
  setRecipeDetails: () => {},
  recipeList: null,
  setRecipeList: () => {},
  savedRecipes: [],
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
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getSavedRecipes();
  }, []);

  const getSavedRecipes = () => {
    const savedRecipesFromStorage = localStorage.getItem('bookmarks');
    if (savedRecipesFromStorage) {
      setSavedRecipes(JSON.parse(savedRecipesFromStorage));
    }
  };

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
    getSavedRecipes,
    recipeDetails, 
    setRecipeDetails,
    recipeList,
    setRecipeList,
    savedRecipes,
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
