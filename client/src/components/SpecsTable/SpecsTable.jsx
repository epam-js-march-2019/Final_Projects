import React from 'react';
import './SpecsTable.css';

function SpecsTable({ specs }) {

  return(
    
    <table className="specs-table">
      {specs &&
      <tbody>
        {specs.map((spec, index) => 
          <tr key={index} className="specs-table__row">
            <td className="specs-table__cell">{spec.name}</td>
            <td className="specs-table__cell">{spec.text}</td>
          </tr>
        )}
      </tbody>}
    </table>
  )
}

export default SpecsTable;