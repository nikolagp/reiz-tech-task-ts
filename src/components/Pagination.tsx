import React from 'react';

type CountriesProps = {
  allCountries: number;
  countriesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

function Pagination(props: CountriesProps) {
  let pages = [];

  for (
    let i = 1;
    i < Math.floor(props.allCountries / props.countriesPerPage + 1);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center my-4 text-center">
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            className={
              page === props.currentPage
                ? 'bg-green-200 p-2 border border-gray-300 border-1 hover:bg-green-200 active:bg-slate-800'
                : 'p-2 border border-gray-300 border-1 hover:bg-green-200'
            }
            onClick={() => props.setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
