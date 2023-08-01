import React from 'react';

function App() {
  return (
    <div className="pt-8 pr-56 pl-56">
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

      <main className="container mx-auto mt-80">
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h1 className="text-4xl font-bold font-segoe-ui">Find the perfect destination</h1>

            <p className="my-10 text-2xl font-semibold font-segoe-ui">
              Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
            </p>

            <button
              className="mt-4 bg-blue-600 text-xl text-white font-bold py-4 px-8 w-64 h-346 rounded-md"> View More
            </button>

          </div>
            <div className="">
            </div>
        </div>
      </main>

    </div>
  );
}

export default App;