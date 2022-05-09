import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mt-4">
          <p>This page is made to show the demo of Responsive Navbar Component.</p>
          <p>Try resizing the page to see the responsive behaviour of Navbar.</p>
          <p>The best part is that everything is done in jsx using tailwind classes. </p>
        </div>
      </MainLayout>
    </>
  )
}

export default Home