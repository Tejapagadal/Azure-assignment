import React from 'react';
import ProductListingPage from './components/ProductListingPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductListingPage />
      {/* Add more components as needed */}
    </div>
  );
}

export default App;
