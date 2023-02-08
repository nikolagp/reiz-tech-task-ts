import React from 'react';

type CountriesProps = {
  allCountries: number;
  countriesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination(props: CountriesProps) {
  let pages = [];

  for (
    let i = 0;
    i < Math.ceil(props.allCountries / props.countriesPerPage);
    i++
  ) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, i) => {
        return (
          <button key={i} onClick={() => props.setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
