import { useState, useMemo } from 'react';
import { initialBooks } from './data/initialBooks';
import { Book, BookCollection } from './types/book';
import { BookList } from './components/BookList';
import { AddBookForm } from './components/AddBookForm';
import { Filters } from './components/Filters';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [books, setBooks] = useLocalStorage<BookCollection>('library-books', initialBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  // Convert Record to Array and apply filters
  const filteredBooksArray = useMemo(() => {
    return Object.values(books).filter((book) => {
      const matchesSearch = 
        book.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.auteur.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesAvailability = showOnlyAvailable ? book.disponible : true;
      
      return matchesSearch && matchesAvailability;
    });
  }, [books, searchQuery, showOnlyAvailable]);

  const handleToggleStatus = (id: string) => {
    setBooks((prev) => ({
      ...prev,
      [id]: { ...prev[id], disponible: !prev[id].disponible }
    }));
  };

  const handleDeleteBook = (id: string) => {
    setBooks((prev) => {
      const newBooks = { ...prev };
      delete newBooks[id];
      return newBooks;
    });
  };

  const handleAddBook = (titre: string, auteur: string) => {
    const id = Date.now().toString();
    const newBook: Book = { id, titre, auteur, disponible: true };
    setBooks((prev) => ({
      ...prev,
      [id]: newBook
    }));
  };

  return (
    <div className="app-container">
      <h1>Library Manager</h1>
      
      <div className="content-wrapper">
        <div className="form-section">
          <AddBookForm onAdd={handleAddBook} />
        </div>
        
        <Filters 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
          showOnlyAvailable={showOnlyAvailable} 
          onToggleAvailable={setShowOnlyAvailable} 
        />

        <BookList 
          books={filteredBooksArray} 
          onToggleStatus={handleToggleStatus} 
          onDelete={handleDeleteBook} 
        />
      </div>
    </div>
  );
}

export default App;
