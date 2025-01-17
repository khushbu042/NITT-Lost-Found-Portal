import React from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "How it works",
      slug: '/',
      active: true
    },
    {
      name: "Sign Up",
      slug: '/sign-up',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: true
    }
  ]
   
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Lost-&-Found</h1>
        <nav>
          <ul className="flex space-x-4">
            {
              navItems.map((item)=>
                  item.active ? (
                    <li key ={item.name} >
                      <button
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        onClick={()=> navigate(item.slug)}
                      >
                      {item.name}
                      </button>

                    </li>
                  ) : null
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
