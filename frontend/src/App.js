
import React from "react";
import Header from "./components/header/Header.jsx";
import ItemGrid from "./components/ItemGrid";
// import { Outlet, Link } from 'react-router-dom';
import HowItWorks from "./components/HowItWorks.jsx"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        {/* How It Works Section */}
        <HowItWorks />
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            I Lost Something
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600">
            I Found Something
          </button>
        </div>
        {/* Item Grid Section */}
        <div className="flex bg-blue-50 rounded-lg shadow p-6 mb-8">
          <div className="md:w-1/4 bg-gray-100 p-4">
            <h1 className="text-xl font-bold mb-4">I lost Something</h1>
            <ul className="space-y-10">
              <li className="hover:underline cursor-pointer">Bags</li>
              <li>Keys</li>
              <li>Electronics</li>
              <li>Books</li>
            </ul>
          </div>
          <div className="md:w-3/4">
            <ItemGrid />
          </div>
        </div>
      </main>

      {/* <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">I Lost Something</h1>
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            I Lost Something
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600">
            I Found Something
          </button>
        </div>
       
      </main> */}
      {/* <ItemGrid /> */}


    </div>
  );
}

export default App;

