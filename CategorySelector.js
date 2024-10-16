
import React from 'react';
import {useNavigate } from 'react-router-dom';

const CategorySelector = ({ category }) => {
  let history =useNavigate();

  const navigateToCategory = (category) => {
    history.push(`/category/${category}`);
  };

  return (
    <div className="category-selector">
      {category.map((category) => (
        <button key={category} onClick={() => navigateToCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;