import React from 'react';

type countryProps = {
  country: string;
  region: string;
  area: number;
};

function TableRow(props: countryProps) {
  const { country, region, area } = props;
  return (
    <tr className="tb-row border-b text-center text-black hover:bg-green-200">
      <td className="p-4">{country}</td>
      <td className="p-4">{region}</td>
      <td className="p-4">{area}</td>
    </tr>
  );
}

export default TableRow;
