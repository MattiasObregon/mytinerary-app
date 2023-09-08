import React, { useState } from 'react'

import ToggleMenu from './ToggleMenu'
import Display from './Display'
import DisplayResponsive from './DisplayResponsive'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import users_actions from '../store/actions/users'
const { signout } = users_actions

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
    {to: "/auth/signin", title: "Login"},
  ]
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    let mail = useSelector(store=>store.users.user?.mail)
    let dispatch = useDispatch()

  return (
    <header className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black">

      <div className="text-2xl font-bold font-segoe-ui sm:hidden md:block">My Tinerary - {mail}
      <div></div>
      { mail ? <span onClick={()=>dispatch(signout())} >SignOut</span> : null }
      </div>

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