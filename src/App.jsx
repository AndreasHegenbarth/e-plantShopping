
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showPlant, setShowPlant] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handlePlantsClick = () => {
    setShowPlant(true); 
    setShowProductList(false); 
};

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className={`aboutus_container ${showPlant ? 'visible' : ''}`} >
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onShowPlant={handlePlantsClick} />
      </div>
    </div>
  );
}

export default App;



