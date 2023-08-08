import { Link as Anchor } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black">

      <div className="text-2xl font-bold font-segoe-ui">My Tinerary</div>

      <nav className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center">
        <Anchor to="/" className="font-bold text-lg font-segoe-ui">Home</Anchor>
        <Anchor to="/cities" className="font-bold text-lg font-segoe-ui">Cities</Anchor>
        <Anchor to="/login" className="flex items-center font-bold text-white text-lg bg-blue-600 rounded-md px-4 py-2">
          <img src="/user.svg" alt="User Icon" className="mr-2 h-4 w-4"/> Login
        </Anchor>
      </nav>
        
    </header>
  )
}