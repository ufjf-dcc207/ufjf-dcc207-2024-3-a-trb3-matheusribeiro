import { useReducer } from 'react';
import './App.css'
import Add from './components/Add'
import BookList from './components/BookList'
import { BookType } from "./types/Book";

interface AppState{
  books: BookType[],
}

type AppAction = {type: 'ADD_BOOK'; payload: BookType};

const initialState: AppState ={
  books: [],
}


function reducer(state: AppState, action: AppAction) : AppState {
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
