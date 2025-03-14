import { useReducer } from 'react';
import './App.css'
import Add from './components/Add'
import BookList from './components/BookList'

const initialState ={
  books: [],
}

function reducer(state, action){
  switch (action.type){
    case 'ADD_BOOK':
      return{
        ...state,
        books: [...state.books, action.payload],
      };
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <div>
        <Add dispatch={dispatch}/>
        <BookList books={state.books}/>
      </div>
    </>
  )
}

export default App
