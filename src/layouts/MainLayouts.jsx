import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function MainLayouts() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-[32px] md:pr-10 lg:pr-[218px] md:pl-10 lg:pl-[219px] ">
      <NavBar/>
      <Outlet />
    </div>
  )
}