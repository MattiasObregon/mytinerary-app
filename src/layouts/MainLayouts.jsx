import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayouts() {
  return (
    <div className="pt-[32px] pr-[218px] pl-[219px]">
      <NavBar/>
      <Outlet />
    </div>
  )
}