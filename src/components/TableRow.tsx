import React from 'react';

type countryProps = {
  country: string;
  region: string;
  area: number;
};

function TableRow(props: countryProps) {
  const { country, region, area } = props;
  return (
    <tr className="text-center text-black border-b tb-row hover:bg-green-200">
      <td className="p-3">{country}</td>
      <td className="p-3">{region}</td>
      <td className="p-3">{area}</td>
    </tr>
  );
}

export default TableRow;
