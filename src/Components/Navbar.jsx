import React, { useState } from 'react';



const Navbar = () => {
  const [isServiceOpen, setServiceOpen] = useState(false);

  const toggleService = () => {
    setServiceOpen(!isServiceOpen);
  };

  return (
    <div className="header">
       <div className="logo">
      
      </div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li onClick={toggleService}>Service</li>
          {isServiceOpen && (
            <ul className="service-accordion">
              <li>Service Item 1</li>
              <li>Service Item 2</li>
             
            </ul>
          )}
           <li>RentalPolicies</li>
          
        </ul>
        <button>contact us</button>
      </nav>
    </div>
  );
};

export default Navbar;