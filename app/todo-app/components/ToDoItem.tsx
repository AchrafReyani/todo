import useAuth from '@/app/lib/hooks/useAuth';
import React from 'react'
import { doc, updateDoc, deleteDoc} from 'firebase/firestore';
import { db } from '@/app/lib/firebase/clientApp';
import { deleteToDo, updateToDo, updateStatus } from '@/app/lib/actions/ToDoActions';


const ToDoItemComponent = ({ todo } : {todo: {id: string, todo: string, timestamp: number, complete: boolean}}) => {
    const auth = useAuth();

    return (
    <div className="hover:border-2 shadow-md p-2 m-1 rounded-sm">
        <div className="text-xs">{new Date(todo.timestamp).toDateString()}</div>
        <div className="flex mx-1 hover:border-slate-300">
            <input type="checkbox" checked={todo.complete} onChange={(e) => updateStatus(auth?.uid, todo.id, e.target.checked) }/>
            <input
                onBlur={(e) => updateToDo(auth?.uid, todo.id, e.target.value)}
                type="text"
                defaultValue={todo.todo}
                disabled={todo.complete}
                className={todo.complete ? 'complete-todo' : 'incomplete-todo'}
            />
            <button 
            className="bg-red-600 text-white text-xs px-2 rounded-md"
            onClick={() => deleteToDo(auth?.uid,todo.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ToDoItemComponent