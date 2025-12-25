import React from 'react';
import './CategoryTag.css'

const CategoryTag = ({ label, color }) => (
  <span className="category-tag" style={{ backgroundColor: color }}>
    {label}
  </span>
);

export default CategoryTag;