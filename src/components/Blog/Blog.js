import React from "react";
import "./Blog.css";
// import Indicator from "../../Assets/Image/indicator.svg";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const { imageURL, title, blog: blogBody, admin, _id } = blog;
  return (
    <div className='blog-container'>
      <div className='blog-image-container'>
        <img src={imageURL} alt='' />
      </div>
      <div className='blog-content'>
        <div>
          <h1>{title}</h1>
          <div className='author-name'>
            <img src="https://raw.githubusercontent.com/mir-hussain/tech-geeks/c3031ed66e3dce680c72c93f4b14dc80f363ca7b/src/Assets/Image/indicator.svg" alt='' />
            <p>Arnob Tarafder</p>
          </div>
        </div>
        <p className='blog-preview'>
          {blogBody.length < 400 ? blogBody.length : blogBody.slice(0, 400)}
          <span className='read-more' onClick={() => navigate(`/blog/${_id}`)}>
            ...Read More
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;