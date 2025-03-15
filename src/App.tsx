import { useReducer } from "react";
import "./App.css";
import Add from "./components/Add";
import BookList from "./components/BookList";
import { BookType } from "./types/Book";

interface AppState {
  books: BookType[];
}

type AppAction =
  | { type: "ADD_BOOK"; payload: BookType }
  | { type: "UPDATE_BOOK"; payload: BookType };

const initialState: AppState = {
  books: [],
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <Add dispatch={dispatch} />
        <BookList books={state.books} dispatch={dispatch}/>
      </div>
    </>
  );
}

export default App;
