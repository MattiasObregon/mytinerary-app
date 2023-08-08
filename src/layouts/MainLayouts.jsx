import NavBar from "./NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayouts() {
  return (
    <div className="pt-8 pr-56 pl-56">
      <NavBar/>
      <Outlet />
    </div>
  )
}