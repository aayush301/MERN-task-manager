import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';

const AddTask = () => {
  useEffect(() => {
    document.title = "Add task";
  }, []);

  return (
    <>
      <MainLayout>
        <div>add task</div>
      </MainLayout>
    </>
  )
}

export default AddTask