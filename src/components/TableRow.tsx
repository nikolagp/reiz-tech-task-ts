import React from 'react';

type countryProps = {
  country: string;
  region: string;
  area: number;
};

function TableRow(props: countryProps) {
  const { country, region, area } = props;
  return (
    <tr className="border-b text-center">
      <td className="p-4 text-red-400">{country}</td>
      <td className="p-4">{region}</td>
      <td className="p-4">{area}</td>
    </tr>
  );
}

export default TableRow;
