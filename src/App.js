import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Videos from './components/Videos/Videos';

export const BlogContext = createContext()

function App() {

  const [blogs, setBlogs] = useState([])

  return (
    // <div className="App">
    <BlogContext.Provider value={[blogs, setBlogs]}>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/blog/:key' element={<BlogDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </BlogContext.Provider>
    // </div>
  );
}

export default App;
