import React, { useState } from "react";

const SearchItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Dummy Data
  const items = [
    { id: 1, name: "Black Backpack", status: "Lost", date: "April 20, 2024", location: "Building A", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Eyeglasses", status: "Found", date: "April 18, 2024", location: "Library", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Water Bottle", status: "Lost", date: "April 17, 2024", location: "Cafeteria", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Laptop", status: "Lost", date: "April 15, 2024", location: "Block C", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Phone", status: "Found", date: "April 10, 2024", location: "Library", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Umbrella", status: "Lost", date: "April 08, 2024", location: "Canteen", image: "https://via.placeholder.com/150" },
  ];

  // Filter items by search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Items</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
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
      </div>

      {/* Items Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

export default SearchItems;
