import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/home';
import About from './pages/aboutpage/about';
import './style/style.css'
import Tours from './pages/tours/Towers';

function App() {



 const router= createBrowserRouter([
{path:'/' ,element:<Home/>},
{path:'/about' ,element:<About/>},
{path:'/Tours' ,element:<Tours/>},
 ])

  return (   <>
    <RouterProvider router={router} />

  
  </> 
  );
}

export default App;
