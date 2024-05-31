import { createSlice } from '@reduxjs/toolkit';

// Load todos from localStorage
const loadTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todos: loadTodos(),
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleComplete } = toDoSlice.actions;

export default toDoSlice.reducer;