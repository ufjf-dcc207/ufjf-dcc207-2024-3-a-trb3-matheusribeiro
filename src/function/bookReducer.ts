import { useReducer } from "react";
import { BookType } from "../types/Book";

type AppAction =
  | { type: "ADD_BOOK"; payload: BookType }
  | { type: "UPDATE_BOOK"; payload: BookType };

function reducer(state: BookType[], action: AppAction): BookType[] {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "UPDATE_BOOK":
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    default:
      return state;
  }
}

export function useBook(){
  const [state, dispatch] = useReducer(reducer, []);

  function addBook(book: BookType) {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  };

  function updateBook(book: BookType) {
    dispatch({ type: "UPDATE_BOOK", payload: book });
  };

  return {
    books: state,
    addBook,
    updateBook,
  };
};
