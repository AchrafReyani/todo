'use client'
import React from 'react'
import SignInComponent from '../components/signin/signin';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import useAuth from '../lib/hooks/useAuth';

const ToDoAppLayoutComponent = ({children} : {children: React.ReactElement}) => {
  const isAuthenticated = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        {isAuthenticated ? children : <SignInComponent />}
      </main>
      <Footer />
    </div>
  );
}

export default ToDoAppLayoutComponent