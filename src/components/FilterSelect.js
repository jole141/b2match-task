import React from "react";

const FilterSelect = (props) => {
  return props.data.map((item) => (
    <option value={item} key={item}>
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </option>
  ));
};

export default FilterSelect;
