import React, { useState } from 'react';
import ToggleMenu from './ToggleMenu';
import Display from './Display';
import DisplayResponsive from './DisplayResponsive';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
    {to: "/Login", title: "Login"},
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black">

      <div className="text-2xl font-bold font-segoe-ui sm:hidden md:block">My Tinerary</div>

      <nav className="flex flex-col items-center text-center">
      <ToggleMenu onClick={toggleMenu} />
        {menuOpen && (
          <DisplayResponsive options={options}/>
        )}
        <Display options={options}/>
      </nav>

    </header>
  );
}