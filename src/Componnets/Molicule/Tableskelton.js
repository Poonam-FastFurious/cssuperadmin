import React from "react";

const Tableskelton = () => (
  <table className="table-skeleton">
    <thead>
      <tr>
        <th className="skeleton-cell"></th>
        <th className="skeleton-cell"></th>
        <th className="skeleton-cell"></th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr key={index}>
          <td className="skeleton-cell"></td>
          <td className="skeleton-cell"></td>
          <td className="skeleton-cell"></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Tableskelton;
