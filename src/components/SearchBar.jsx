import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSearch(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />
      <button type="submit" style={{ padding: "10px", marginLeft: "8px" }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;

