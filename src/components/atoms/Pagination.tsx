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
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button className='pagination__btn--previous group' onClick={prevPage} disabled={currentPage === 1}>
        <span>{currentPage === 1 ? 'Page 1' : `Page ${currentPage - 1}`}</span>
        <svg className="svg--sunset--tiny group-disabled:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
      </button>
      <button className='pagination__btn--next group' onClick={nextPage} disabled={(currentPage + 1) * recipesPerPage > totalRecipes}>
        <span>Page {currentPage + 1}</span>
        <svg className="svg--sunset--tiny group-disabled:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
         </svg>
      </button>
    </div>
  );
};
