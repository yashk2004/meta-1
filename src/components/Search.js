import React from 'react';

const Search = ({ setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header">
      <h2 className="header__title">Search it. Explore it. Buy it.</h2>
      
      {/* Search bar container with app icon */}
      <div className="header__search">
        <div
         
           
          className="search-icon-img"
        >
        
        <i className="fas fa-search search-icon"></i>
        </div>
        <input
          type="text"
          className="header__search-input"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          onChange={handleInputChange}  // Handle input change
          />
        
      
      </div>
    </header>
  );
};

export default Search;