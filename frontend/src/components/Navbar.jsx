import { Link, useNavigate} from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { logout } from '../api/user.api';

const Navbar = () => {

    const { isLoggedIn , setIsLoggedIn} = useUser();
    const navigate  = useNavigate();

    const handleLogout = async() => {
       try {
           const response  = await logout();
           alert(response.message);
           setIsLoggedIn(false);
           navigate('/login');
       } catch (error) {
            console.log(error.message);
       }
    }
    return (
    <>
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">Lost & Found Hub</Link>
                <div className="flex space-x-4">
                    { !isLoggedIn ? <>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                        <Link to="/signup" className="text-white hover:text-gray-300">SignUp</Link>
                    </> : <>
                       <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout </button>
                    </>
                    }
                  
                </div>
            </div>
        </nav>
    </>
    )
   


}
export default Navbar