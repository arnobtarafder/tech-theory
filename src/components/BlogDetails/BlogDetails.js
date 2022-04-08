import React, { useContext, useEffect, useState } from "react";
import './BlogDetails.css';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(BlogContext);

  // const [blog, setBlog] = useState({});
  // console.log(blog);

  // useEffect( () => {
  //     fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${key}`)
  //     .then(res => res.json())
  //     .then(data => setBlog(data))
  // } ,[key])

  const blog = blogs.find((blog) => blog._id == key);

  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;