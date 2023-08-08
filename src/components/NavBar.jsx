export default function NavBar() {
  return (
    <header className="container mx-auto flex justify-between items-center text-black">

        <div className="text-2xl font-bold font-segoe-ui">My Tinerary</div>
        <nav className="space-x-4 flex items-center">
          <a href="#" className="font-bold text-lg font-segoe-ui">Home</a>
          <a href="#" className="font-bold text-lg font-segoe-ui">Cities</a>
          <a href="#" className="flex items-center font-bold text-white text-lg bg-blue-600 rounded-md px-4 py-2">
            <img src="/user.svg" alt="User Icon" className="mr-2 h-4 w-4"/> Login
          </a>
        </nav>
        
      </header>
  )
}