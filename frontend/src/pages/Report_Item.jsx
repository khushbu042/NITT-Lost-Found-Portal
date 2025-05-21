import { useState } from "react";

const ReportItemForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "lost", 
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // prepare for API call
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("location", formData.location);
    data.append("category", formData.category);
    data.append("image", formData.image);

    // For now just log it
    console.log("Submitting: ", formData);
    // 🔗 Call your API here with data (FormData)
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Report Lost / Found Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="title"
          placeholder="Item Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl"
        />

        <input
          type="text"
          name="location"
          placeholder="Last Known Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl"
        />

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="category"
              value="lost"
              checked={formData.category === "lost"}
              onChange={handleChange}
            />
            Lost
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="category"
              value="found"
              checked={formData.category === "found"}
              onChange={handleChange}
            />
            Found
          </label>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
};

export default ReportItemForm;
