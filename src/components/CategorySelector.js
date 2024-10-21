
import React from 'react';
import {useNavigate } from 'react-router-dom';

const CategorySelector = ({ categories }) => {
  let navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };
  

  return (
    <div className="category-selector">
      {categories.map((category) => (
        <button key={category} onClick={() => navigateToCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};


export default CategorySelector;