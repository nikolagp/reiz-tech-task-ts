import React from 'react';

type CountriesProps = {
  allCountries: number;
  countriesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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
    <div className="text-center flex flex-wrap justify-center gap-1 my-4">
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            className="p-3 border border-1 border-gray-300"
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
