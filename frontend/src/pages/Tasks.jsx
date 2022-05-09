import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'

const Tasks = () => {
  useEffect(() => {
    document.title = "Tasks";
  }, []);

  return (
    <>
      <MainLayout>
        <div>Tasks</div>

      </MainLayout>
    </>
  )
}

export default Tasks