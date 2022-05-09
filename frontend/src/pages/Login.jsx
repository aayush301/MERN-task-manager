import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import MainLayout from '../layouts/MainLayout'

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <MainLayout>
        <LoginForm />
      </MainLayout>
    </>
  )
}

export default Login