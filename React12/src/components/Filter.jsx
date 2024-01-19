import React from "react";

const Filter = ({ onCategoryChange, onPriceChange, categoryFilter, priceFilter }) => {
  return (
    <div className="filter-options">
      <label>
        Filter by category: 
        <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)}>
            <option value="all">all</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="fitness">Fitness</option>
            <option value="gardening">Gardening</option>
            <option value="furniture">Furniture</option>
        </select>
      </label>
      <label>
        Sort by price: 
        <select value={priceFilter} onChange={(e) => onPriceChange(e.target.value)}>
          <option value="all">None</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
