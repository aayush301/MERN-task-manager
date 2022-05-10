import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className='bg-gray-200 h-[40vh] py-8 text-center'>
            <h1 className='text-2xl'> Welcome to Task Manager App</h1>
            <Link to="/signup">Join now to manage your tasks</Link>
          </div>
        ) : (
          <>
            <div className='mt-8 mx-8'>Welcome {authState.user.name}</div>
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home