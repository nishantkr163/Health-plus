import './App.css';
import { useState, useEffect } from 'react';
import AllRoutes from './Components/AllRoutes';
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar';
import { useLocation } from 'react-router-dom'
import AboutHeroSection from './Components/AboutHeroSection';
import ProductsHeroSection from './Components/ProductsHeroSection';
import JoinUs from './Pages/JoinUs';
import Login from './Components/SignUp';


function App() {

  const [section, setSection] = useState("/")

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
    setSection(location.pathname)
  }, [location]);

  

  return (
    <>
    <div className={section === "/"  ? "HomeHeroSection" : section === '/about' ? 'AboutHeroSection' : section === '/products' ? "ProductHeroSection" : section === '/signup' ? 'LoginHeroSection' : null}>
      <Navbar />
      {section === '/' ? <HeroSection /> : section === '/about' ? <AboutHeroSection /> : section === '/products' ? <ProductsHeroSection /> : section === '/signup' ? <Login /> : null}
    </div>
      <AllRoutes />
    </>
  );
}

export default App;
