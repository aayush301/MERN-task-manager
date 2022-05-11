import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {

  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const liClasses = 'py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm';
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return (
    <>
      <header className='flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center'>
        <h2 className='cursor-pointer uppercase font-medium'>
          <Link to="/"> Task Manager </Link>
        </h2>
        <ul className='hidden md:flex gap-4 uppercase font-medium'>
          {authState.isLoggedIn ? (
            <>
              <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2">
                <Link to='/tasks/add'> <i className="fa-solid fa-plus"></i> Add task </Link>
              </li>
              <li className={liClasses} onClick={handleLogoutClick}>Logout</li>
            </>
          ) : (
            <li className={liClasses}><Link to="/login">Login</Link></li>
          )}
        </ul>
        <span className='md:hidden cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>


        {/* Navbar displayed as sidebar on smaller screens */}
        <div className={`absolute md:hidden right-0 top-0 transition ${(isNavbarOpen === true) ? 'translate-x-0' : 'translate-x-full'} bg-gray-100 shadow-md w-full sm:w-9/12 h-full`}>
          <div className='flex'>
            <span className='m-4 ml-auto cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-xmark"></i></span>
          </div>
          <ul className='flex flex-col gap-4 uppercase font-medium text-center'>
            <li className={liClasses}> <i className="fa-solid fa-plus"></i> Add task</li>
            <li className={liClasses}><Link to="/login">Logout</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar