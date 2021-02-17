import React from "react";

const HeaderComponent = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => (
          <th key={head.field}>{head.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderComponent;
