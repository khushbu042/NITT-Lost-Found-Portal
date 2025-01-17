import React from "react";
import "../images/image.png"

const items = [
  { id: 1, title: "Lost Something", image: "https://www.google.com/imgres?q=images%20of%20laptop&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1681666713677-8bd559bef6bb%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaptop&docid=7PT6bk_SGNxAlM&tbnid=NtclWN6vhhJKMM&vet=12ahUKEwjrs73fqvKKAxVOklYBHTMWLfAQM3oECBwQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjrs73fqvKKAxVOklYBHTMWLfAQM3oECBwQAA" },
  { id: 2, title: "Found Something", image: "src/images/Screenshot(1).png" },
  { id: 3, title: "Lost Something", image: "../images/image.png" },
  { id: 4, title: "Found Something", image: "../images/Screeshot(1).png" },
  { id: 4, title: "Found Something", image: "../images/Screeshot(1).png" },
  { id: 4, title: "Found Something", image: "../images/Screeshot(1).png" }
];

function ItemGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-md shadow-md p-4 text-center flex flex-col items-center"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-24 w-24 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemGrid;
