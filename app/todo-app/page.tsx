import React from 'react'
import AddToDoComponent from './components/AddToDo'
import SignOutButton from '../components/signout/signout'
import ToDoListComponent from './components/ToDoList';

const ToDoAppComponent = () => {
  return (
    <div className="flex flex-col items-center pt-12 space-y-4">
        <SignOutButton />
        <AddToDoComponent />
        <ToDoListComponent />
    </div>
  )
}

export default ToDoAppComponent