import React from 'react';
import './BlogCard.css';
import LightButton from './LightButton'; 
const BlogCard = ({ title, category, date, excerpt, image }) => {
  return (
    <article className="blog-post-card">
      <div className="blog-card-header">
        {image ? (
          <img src={image} alt={title} className="blog-card-thumb" />
        ) : (
          <div className="blog-card-placeholder"></div>
        )}
      </div>
      
      <div className="blog-card-body">
        <span className="blog-card-category">{category}</span>
        <span className="blog-card-date">{date}</span>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        
        <div className="blog-card-footer">
          <LightButton text="Read Article" link="#" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;