import React, { createContext, useState } from 'react';
import { Recipe } from '../models/Recipe';

// Define the type for context
type ContextType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileMenu: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileSearch: () => void;
  recipeDetails: Recipe | null; 
  setRecipeDetails: React.Dispatch<React.SetStateAction<Recipe | null>>;
  recipeList: Recipe[] | null;
  setRecipeList: React.Dispatch<React.SetStateAction<Recipe[] | null>>;
};

// Create context with a default value
export const AppContext = createContext<ContextType>({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  toggleMobileMenu: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  toggleMobileSearch: () => {},
  recipeDetails: null, 
  setRecipeDetails: () => {},
  recipeList: null,
  setRecipeList: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null); 
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null); 

  const toggleMobileMenu = () => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  // Provide context value to children components
  const contextValue: ContextType = {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    toggleMobileMenu,
    isSearchOpen,
    setIsSearchOpen,
    toggleMobileSearch,
    recipeDetails, 
    setRecipeDetails,
    recipeList,
    setRecipeList,
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
