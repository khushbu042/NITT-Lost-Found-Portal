import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-blue-700">Lost & Found</h2>
        <nav className="space-y-4 text-gray-700">
          <a href="#" className="block hover:text-blue-600">Home</a>
          <a href="#" className="block hover:text-blue-600">My Reports</a>
          <a href="#" className="block hover:text-blue-600"> Lost Items</a>
          <a href="#" className="block hover:text-blue-600"> Found Items</a>
          <a href="#" className="block hover:text-blue-600"> Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Lost & Found</h1>
          <div className="space-x-2">
            <Link  to="/report-item" className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50">Report Item</Link>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Find Items</button>
          </div>
        </div>

        {/* Recently Lost Carousel */}
        <h2 className="text-xl font-semibold mb-3">Recently Lost</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Card 1 */}
            <div className="min-w-[250px] bg-white rounded-xl shadow p-4">
                <img src="images/bag.jpeg" alt="Bag" className="w-48 h-48 rounded mb-2" />
                <h3 className="text-lg font-bold">Laptop Bag</h3>
                <p className="text-sm text-gray-600">Date Lost: April 20, 2024</p>
                <p className="text-sm text-gray-600">Building A</p>
            </div>

            <div className="min-w-[250px] bg-white rounded-xl shadow p-4">
                <img src="images/key.jpg" alt="Key" className="w-48 h-48 rounded  mb-2"/>
                <h3 className="text-lg font-bold">Key</h3>
                <p className="text-sm text-gray-600">Date Found: April 18, 2024</p>
                <p className="text-sm text-gray-600">Library</p>
            </div>

            {/* Card 3 (extra example) */}
            <div className="min-w-[250px] bg-white rounded-xl shadow p-4">
                <img src="images/perse.jpeg" alt="Wallet" className="w-48 h-48 rounded mb-2" />
                <h3 className="text-lg font-bold">Wallet</h3>
                <p className="text-sm text-gray-600">Date Lost: April 10, 2024</p>
                <p className="text-sm text-gray-600">Cafeteria</p>
            </div>

            {/* Card 4 (extra example) */}
            <div className=" min-w-[250px] bg-white rounded-xl shadow p-4">
                <img src="images/perse.jpeg" alt="Wallet" className="w-48 h-48 rounded mb-2" />
                <h3 className="text-lg font-bold">Wallet</h3>
                <p className="text-sm text-gray-600">Date Lost: April 10, 2024</p>
                <p className="text-sm text-gray-600">Cafeteria</p>
            </div>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by:</label>
          <select className="w-48 p-2 border rounded-lg">
            <option>Status</option>
            <option>Lost</option>
            <option>Found</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 font-semibold">Item</th>
                <th className="p-3 font-semibold">Description</th>
                <th className="p-3 font-semibold">Status</th>
                <th className="p-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Water Bottle</td>
                <td className="p-3">Transparent, blue cap</td>
                <td className="p-3">Lost</td>
                <td className="p-3">April 17, 2024</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Headphones</td>
                <td className="p-3">Black, over-ear</td>
                <td className="p-3">Found</td>
                <td className="p-3">April 15, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
