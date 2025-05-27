import React, { useState } from "react";
import { searchItems } from "../api/item.api";

const SearchItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [items,setItems] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 4;

  const handleSearch = async() => {
    try {
      const res = await searchItems(searchTerm,location,category);
      console.log("Headlesearch Res:",res);
      console.log("Response Data without:",res);
      setItems(res);
      // console.log("Response Array:",items); 
    } catch (error) {
      console.log("error message:",error.message)
    }
  }

  setTimeout(()=>{
    console.log("after Updating:",items);
  },1000)

  // Pagination logic
  // const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Items</h1>

      {/* Search Bar */}
      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          placeholder="Search by item name..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset page on new search
          }}
        />
        <div className="flex justify-center gap-5 m-6" >
          <select 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Locations</option>
            <option value="library">Library</option>
            <option value="canteen">Canteen</option>
          </select>
          <select 
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All category</option>
            <option value="found">Found</option>
            <option value="lost">Lost</option>
          </select>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold"
          > 
          Search
          </button>
        </div>
       
      </div>

      {/* display items */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          items.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={`http://localhost:8000/static/${item.image}`} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm">
                  {item.status} • {item.category}
                </p>
                <p className="text-gray-500 text-sm">Location: {item.location}</p>
              </div>
            </div>
          ))  
        }
      </div> 
   

      {/* Items Grid */}
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600 text-sm">
                  {item.status} • {item.date}
                </p>
                <p className="text-gray-500 text-sm">Location: {item.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No items found.</p>
        )}
      </div> */}

      {/* Pagination Controls */}
      {/* {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === idx + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
};

export default SearchItems;
