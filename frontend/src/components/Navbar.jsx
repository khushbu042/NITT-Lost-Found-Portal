import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <>
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">Lost & Found Hub</Link>
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    <Link to="/signup" className="text-white hover:text-gray-300">SignUp</Link>
                </div>
            </div>
        </nav>
    </>
    )
   


}
export default Navbar