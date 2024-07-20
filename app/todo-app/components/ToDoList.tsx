'use client'
import React, { useEffect, useState } from 'react';
import { db } from "@/app/lib/firebase/clientApp";
import { collection, onSnapshot } from "firebase/firestore";
import useAuth from "@/app/lib/hooks/useAuth";
import ToDoItemComponent from './ToDoItem';

const ToDoListComponent = () => {
    const [ todos, setToDos ] = useState<any []>([]);
    const [ visibleTodos, setVisibleTodos ] = useState<any []>([]);
    const [ filter, setFilter ] = useState<string>('all-todos');
    const auth = useAuth();

    useEffect(() => {
        if(!auth) return;
        const todoRef = collection(db, 'users', auth?.uid, 'todos');
        const unsubscribe = onSnapshot(todoRef, (snapshot) => {
            if(!snapshot.empty) {
                let todos: any[] = [];
                snapshot.forEach((doc) => {
                    todos.push({...doc.data(), id: doc.id});
                })
                setToDos([...todos]);
                return;
            }
            setToDos([]);
        });

        return () => unsubscribe();
    },[ auth ])

    useEffect(() => {
        setVisibleTodos(todos);
    },[todos])

    useEffect(() => {
        switch(filter) {
            case 'all-todos':
                setVisibleTodos(todos);
                return;
            case 'pending':
                let allPending = todos.filter(todo => !todo.complete);
                setVisibleTodos(allPending);
                return;
            case 'complete':
                let allComplete = todos.filter(todo => todo.complete);
                setVisibleTodos(allComplete);
                return;
            default:
                setVisibleTodos(todos);
        }
    },[filter,todos])

    //check to see if any todo's are left.
    if(todos.length <= 0) {
        return (<h1 className='text-center mt-4'>You&apos;re all caught up.  Nice work! 🎉</h1>)
    }

    //additional check to see if all todo's are marked as complete
    const allComplete = todos.length > 0 && todos.every(todo => todo.complete);

    const handleFilter = (e: any) => {
        let filterSelected = e.currentTarget.id;
        setFilter(filterSelected);
    }
    
    return (
        <div className='flex flex-col items-center'>
            {allComplete && (
            <div className="flex bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 mt-4" role="alert">
                <span className="block sm:inline">Great job! All your todos are complete!</span>
            </div>
            )}
            <div>
                <h1 className='text-center mb-2 font-bold'>Filters</h1>
                
                <input type='radio' 
                    className='mx-2'
                    id='pending'
                    name='filter'
                    checked={filter == 'pending'}
                    onChange={handleFilter}
                />
                 <label
                    htmlFor='pending'
                 >Pending</label>

                <input type='radio' 
                    className='mx-2'
                    id='complete'
                    name='filter'
                    checked={filter == 'complete'}
                    onChange={handleFilter}
                />
                 <label
                    htmlFor='complete'
                 >Complete</label>

                <input type='radio' 
                    className='mx-2'
                    id='all-todos'
                    name='filter'
                    checked={filter == 'all-todos'}
                    onChange={handleFilter}
                />
                 <label
                    htmlFor='all-todos'
                 >All To Dos</label>

            </div>
            <div className='p-3 min-w-fit w-[350px]'>
                {visibleTodos.map((todo) => (
                    <ToDoItemComponent key={todo.id} todo={todo} />
                ))} 
            </div>
        </div>
    )
}

export default ToDoListComponent;