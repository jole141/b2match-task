import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search"
      value={search}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchComponent;
