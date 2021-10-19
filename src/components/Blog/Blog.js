import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('https://animfahad32.github.io/fakeData/gymblogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
              <div className="page-title mt-5">
                <h1>BLOGS</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/Blogs</NavLink>
            </div>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                    blogs.map((blog)=>

                    <div key ={blog.id} className="card-group">
               <div className="card">
                 <img src={blog.img}className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title title-color">{blog.title}</h5>
                   <p className="card-text">{blog.details}</p>
                  
                 </div>
                 <button className="btn btn-style">Read More</button>
               </div>
               
             </div>
                        
                        )
                    
                    }
                </div>
            
            </div>
        </div>
    );
};

export default Blog;