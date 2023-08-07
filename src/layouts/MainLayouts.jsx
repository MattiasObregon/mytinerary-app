import NavBar from "../components/NavBar"

export default function MainLayouts({children}) {
  return (
    <div className="pt-8 pr-56 pl-56">
      <NavBar/>
      {children}
    </div>
  )
}