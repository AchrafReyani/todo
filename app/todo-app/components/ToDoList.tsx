'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/app/lib/firebase/clientApp';
import { collection, onSnapshot } from 'firebase/firestore';
import useAuth from "@/app/lib/hooks/useAuth";

const ToDoListComponent = () => {
    const [ todos, setToDos ] = useState<any []>([ ]);
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
                console.log(todos);
                setToDos(todos);
            }   
        });

        return () => unsubscribe();
    }, [ auth ])

    return (
        <div>
            <h1>To Do List</h1>
        </div>
    )
}

export default ToDoListComponent;