import React, { useState, useEffect } from 'react';
import "./NavBar_style.css";
import { navItems } from '../../src/data.js';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  
  return (
    <>
      <header>
        <h1>Ahmad's Portfolio</h1>
        <nav>
          <ul>
            {navItems.map((item) =>
              <li key={item.id}><a href={item.path}>{item.label}</a></li>
            )}
          </ul>
        </nav>

        <button 
          className="toggle-btn" 
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Night"}
        </button>
      </header>
    </>
  );
}

export default NavBar;
