import useAuth from '@/app/lib/hooks/useAuth';
import React from 'react'

const ToDoItemComponent = ({ todo } : {todo: {id: string, todo: string, timestamp: number, complete: boolean}}) => {
  

    const auth = useAuth();

    const handleCheckBox = () => {

    }

    const handleDelete = () => {

    }

    const handleBlur = () => {

    }



    return (
    <div className="flex mx-1 hover:bg-slate-300">
        <input type="checkbox" checked={todo.complete} onChange={handleCheckBox}/>
        <input
            onBlur={handleBlur}
            type="text"
            defaultValue={todo.todo}
            disabled={todo.complete}
            className={
                todo.complete ? 'border-0 ml-3 focus:border-0 focus:outline-none focus:ring-0 rounded-none line-through hover:bg-slate-300'
                : 'border-0 ml-3 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-b-2 focus:outline-none focus:ring-0 rounded-none hover:bg-slate-300'
            }
        />
        <button onClick={handleDelete}>x</button>
    </div>
  )
}

export default ToDoItemComponent