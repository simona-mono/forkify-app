import React, { createContext, useReducer } from 'react';
import { Recipe } from '../models/Recipe';

// Define action types
export enum ActionType {
  GET_BOOKMARKS = 'GET_BOOKMARKS',
  ADD_BOOKMARK = 'ADD_BOOKMARK',
  REMOVE_BOOKMARK = 'REMOVE_BOOKMARK',
}

// action interfaces
interface Action {
  type: ActionType;
  payload?: any;
}

interface ContextType {
  savedRecipes: Recipe[];
  dispatch: React.Dispatch<Action>;
}

export const BookmarkContext = createContext<ContextType>({
  savedRecipes: [],
  dispatch: () => {}, 
});

type Props = {
  children: React.ReactNode;
};

const bookmarkReducer = (state: Recipe[], action: Action) => {
  switch (action.type) {
    case ActionType.GET_BOOKMARKS:
      const savedRecipesFromStorage = localStorage.getItem('bookmarks');
      return savedRecipesFromStorage ? JSON.parse(savedRecipesFromStorage) : [];
    case ActionType.ADD_BOOKMARK:
      const updatedRecipes = [...state, action.payload];
      localStorage.setItem('bookmarks', JSON.stringify(updatedRecipes));
      return updatedRecipes;
    case ActionType.REMOVE_BOOKMARK:
      const filteredRecipes = state.filter(
        (recipe: Recipe) => recipe.recipe_id !== action.payload
      );
      localStorage.setItem('bookmarks', JSON.stringify(filteredRecipes));
      return filteredRecipes;
    default:
      return state;
  }
};

export const BookmarkProvider = ({ children }: Props) => {
  const [savedRecipes, dispatch] = useReducer(
    bookmarkReducer, 
    []
    );

  const contextValue: ContextType = {
    savedRecipes,
    dispatch,
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => {
  const context = React.useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarkContext must be used within a BookmarkProvider');
  }

  return context;
};
