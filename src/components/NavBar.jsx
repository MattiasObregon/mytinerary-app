import React, { useState } from 'react'
import ToggleMenu from './ToggleMenu'
import Display from './Display'
import DisplayResponsive from './DisplayResponsive'
import { useSelector } from 'react-redux/es/exports'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const user = useSelector((store) => store.users.user)

  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
    {to: "/auth/signin", title: "Login"}
  ]
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    return (
      <header className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black">
        <div className="flex text-2xl font-bold font-segoe-ui sm:hidden md:block">
        <div className="flex flex-col items-center">
         MyTinerary {user && user.photo && (
            <>
              <img
                src={user.photo}
                alt="User"
                className="h-[100px] w-[100px] object-cover rounded-full"
              />
              <p className="text-lg mt-2">{user.name}</p>
            </>
          )}
        </div>
        </div>
  
        <nav className="flex flex-col items-center text-center">
          <ToggleMenu onClick={toggleMenu} />
          {menuOpen && <DisplayResponsive options={options} />}
          <Display options={options} />
        </nav>
      </header>
    );
  }