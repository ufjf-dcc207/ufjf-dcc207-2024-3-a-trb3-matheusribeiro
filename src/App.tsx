import "./App.css";
import Add from "./components/Add";
import BookList from "./components/BookList";
import { useBook } from "./function/bookReducer";



function App() {
  const { books, addBook, updateBook } = useBook();;

  return (
    <>
      <div>
        <Add onAddBook={addBook} />
        <BookList books={books} onUpdateBook={updateBook}/>
      </div>
    </>
  );
}

export default App;
