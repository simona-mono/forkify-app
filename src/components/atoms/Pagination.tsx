import React from 'react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  recipesPerPage: number;
  totalRecipes: number;
}

export default function Pagination({ currentPage, setCurrentPage, recipesPerPage, totalRecipes }: PaginationProps){
  const nextPage = () => {
    if ((currentPage + 1) * recipesPerPage <= totalRecipes) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination mt-14 px-8 flex justify-between">
      <button onClick={prevPage} disabled={currentPage === 1}>
        {currentPage === 1 ? 'Page 1' : `Page ${currentPage - 1}`}
      </button>
      <button onClick={nextPage} disabled={(currentPage + 1) * recipesPerPage > totalRecipes}>
        Page {currentPage + 1}
      </button>
    </div>
  );
};

