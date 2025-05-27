import { Link } from "react-router-dom"
const Home = () => {

  return (
    <section  id="how-it-works" className="bg-blue-50 rounded-lg shadow p-6 mb-8" >
    <p className="text-gray-700 text-center">
        Welcome to Lost & Found! This platform helps students report and find
        lost items. Whether you've lost or found something, use the buttons
        below to report your item or search for it. Let's make finding your
        belongings easy!
    </p>
    {/* Action Buttons */}
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <Link to='/search' className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
        I Lost Something
        </Link>
        <Link className="px-6 py-3 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600">
        I Found Something
        </Link>
    </div>
    </section>

  )
}
export default Home 