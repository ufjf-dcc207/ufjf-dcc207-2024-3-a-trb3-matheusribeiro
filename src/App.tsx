import "./App.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import { useBook } from "./function/bookReducer";



function App() {
  const { books, addBook, updateBook } = useBook();

  return (
    <>
      <div>
        <AddBook onAddBook={addBook} />
        <BookList books={books} onUpdateBook={updateBook}/>
      </div>
    </>
  );
}

export default App;
