import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

  return (
    <div className='todo'>
        <p onClick={() => toggleComplete(task.id)}className={`${task.completed ? 'completed' : '' }`} >{task.task}</p>
        <div className='icon'>
            <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo