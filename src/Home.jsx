import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './Redux/toDoSlice'
import { nanoid } from 'nanoid';
import { Form, Table } from 'react-bootstrap';



const Home = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({ id: nanoid(), title, completed: false }));
      setTitle('');
    }
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleComplete = (todoId) => {
    dispatch(toggleComplete(todoId));
  };

  return (
    <div style={{height:'100vh',backgroundColor:'#F1F90A'}} className='w-100 ' >
     <div style={{height:'90px'}} className=' w-100  d-flex align-items-center justify-content-center '>
     <h1 style={{textAlign:'center',color:'black'}}>
       My Todo List
      </h1>
      
     </div>
       

     
      <div className='d-flex align-items-center justify-content-center mt-5 '>
      <Form.Control
      className='w-25'
        type="text"
        placeholder="Add a new todo"
        aria-describedby="passwordHelpBlock"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>

        <button onClick={handleAddTodo} type="button" className="btn btn-success ms-5">ADD</button>
      </div>
      <div  className=' d-flex align-items-center justify-content-center mt-5 '>

    <Table className='w-75'>
      
      <tbody>
      {todos.map((todo) => (
            <tr key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
              </td>
              <td>{todo.title}</td>
              <td>
                
                <button className='p-2' style={{borderRadius:'10px',border:'solid white'}} onClick={() => handleDeleteTodo(todo.id)}><i class="fa-solid fa-trash text-danger"></i></button>
              </td>
            </tr>
          ))}

      </tbody>
      </Table>
      </div>
      {/* <h3 className='m-5 p-5'>Total Complete Items :</h3>  */}

    </div>
  );
};

export default Home;