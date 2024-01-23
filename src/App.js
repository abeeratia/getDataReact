import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/home';
import About from './pages/aboutpage/about';
import './style/style.css'
import Tours from './pages/tours/Towers';
import Reviews from './pages/reviews/reviews';
import Category from './pages/category/category';

function App() {



 const router= createBrowserRouter([
{path:'/' ,element:<Home/>},
{path:'/about' ,element:<About/>},
{path:'/Tours' ,element:<Tours/>},
{path:'/reviews' ,element:<Reviews/>},
{path:'/category' ,element:<Category/>},
 ])

  return (   <>
    <RouterProvider router={router} />

  
  </> 
  );
}

export default App;
