'use client'
import React, { useState } from 'react'
import { db } from '../../lib/firebase/clientApp'
import { addDoc, collection } from 'firebase/firestore'
import  useAuth  from '@/app/lib/hooks/useAuth'


const AddToDoComponent = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const auth = useAuth();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let todo = e.currentTarget.todo.value;
        let obj = {
            todo: todo,
            timestamp: new Date().getTime(),
            complete: false
        }
        // SAVE TO FIREBASE
        const todoRef = collection(db, 'users', auth?.uid,'todos');
        setLoading(true);
        try {
            const docRef = await addDoc(todoRef, obj)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);

            // RESET INPUT AND REFOCUS
            (document.getElementById('todo-input') as HTMLInputElement).value = '';
            (document.getElementById('todo-input') as HTMLInputElement).focus();
        }
        
    }

  return (
    <form action=""
        onSubmit={handleSubmit}
        className="mt-4 flex justify-center"
    >
        <input type="text" id="todo-input" name="todo" placeholder="Add todo..." required />
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >Add</button>
    </form>
  )
}

export default AddToDoComponent