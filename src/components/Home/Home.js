import React, { useContext, useEffect, useState } from 'react';
import {BlogContext} from "../../App"
import Blog from '../Blog/Blog';
import './Home.css';

const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useContext(BlogContext)

    useEffect( () => {
        // fetch("https://retro-tech-talks.herokuapp.com/blogs")
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blogs-container mx-auto'>
            {
            blogs.map((blog, index) => (
                <Blog key={index} blog={blog} />
            ) )
            }
        </div>
    );
};

export default Home;