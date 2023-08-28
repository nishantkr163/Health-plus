import './App.css';
import { useState, useEffect, useContext } from 'react';
import AllRoutes from './Components/AllRoutes';
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutHeroSection from './Components/AboutHeroSection';
import ProductsHeroSection from './Components/ProductsHeroSection';
import JoinUs from './Pages/JoinUs';
import Login from './Components/SignUp';
import { useParams } from 'react-router-dom';
import { LabelContext } from './labelDataContext';
import MyProfile from './Components/MyProfile';
import Admin from '../src/Pages/AdminPage/Admin';
import Cart from './Components/Cart';


function App() {

  const [section, setSection] = useState("/")
  const val = useParams()
  const value = useContext(LabelContext)
  console.log(value.prof)
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
    setSection(location.pathname)
  }, [location]);

  const hiddenNavbarRoutes = ['/admin', '/admin/coaches', '/admin/prodhandle'];

  return (
    <>
    <div className={section === "/"  ? "HomeHeroSection" : section === '/about' ? 'AboutHeroSection' : section === '/products' ? "ProductHeroSection" : section === '/signup' ? 'LoginHeroSection' : null}>
    {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}
      {section === '/' ? <HeroSection /> : section === '/about' ? <AboutHeroSection /> : section === '/products' ? <ProductsHeroSection /> : section === '/signup' ? <Login /> : null}
      {
        value.prof ? <MyProfile /> : null
      }
      {
        value.cart ? <Cart /> : null
      }
    </div>
      <AllRoutes />
    </>
  );
}

export default App;
