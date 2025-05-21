import React from "react";

const ItemDetail = () => {
  const item = {
    name: "Black Backpack",
    status: "Lost",
    image: "https://via.placeholder.com/300",
    date: "April 20, 2024",
    location: "Building A",
    description: "Black backpack with laptop and books. Contains ID card and notes.",
    contact: {
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
          <span
            className={`inline-block px-3 py-1 text-sm rounded-full mb-3 ${
              item.status === "Lost"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {item.status}
          </span>
          <p className="text-gray-700 mb-3">
            <strong>Date:</strong> {item.date}
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Location:</strong> {item.location}
          </p>
          <p className="text-gray-800 mb-4">{item.description}</p>
          <hr className="my-4" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Contact Info</h3>
            <p className="text-gray-700">
              {item.contact.name} <br />
              <a
                href={`mailto:${item.contact.email}`}
                className="text-blue-600 underline"
              >
                {item.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
