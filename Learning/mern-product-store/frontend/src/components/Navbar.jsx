import { BsCart4, BsFillMoonStarsFill, BsFillSunFill, BsFillPlusSquareFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  
  return (
    <nav style={{backgroundColor: darkMode ? '#1a1a1a' : '#00ccff', paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '1rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 0 10px rgb(0, 0, 0)'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: darkMode ? '#00ccff' : '#1a1a1a', fontWeight: 'bold'}}>
        <NavLink to='/' style={{fontSize: '1.5rem', color: darkMode ? '#00ccff' : '#1a1a1a', textDecoration: 'none'}}>Product Store</NavLink>
        <BsCart4 style={{fontSize: '1.65rem'}} />
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <NavLink to='/create'><BsFillPlusSquareFill style={{fontSize: '1.65rem', color: darkMode ? '#00ccff' : '#1a1a1a'}} /></NavLink>
        <button onClick={toggleDarkMode} style={{fontSize: '1rem', outline: 'none', border: 'none', backgroundColor: darkMode ? '#1a1a1a' : '#00ccff' }}>
          {darkMode ? <BsFillMoonStarsFill style={{fontSize: '1.5rem', marginTop: 'auto', marginBottom: 'auto', color: darkMode ? '#00ccff' : '#1a1a1a'}} /> : <BsFillSunFill style={{fontSize: '1.5rem', marginTop: 'auto', marginBottom: 'auto', color: darkMode ? '#ffffff' : '#1a1a1a'}} />}
        </button>
      </div>
    </nav>
  );
};


export default Navbar;