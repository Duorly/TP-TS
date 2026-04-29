import { Book } from '../types/book';
import { BookCard } from './BookCard';

interface BookListProps {
  books: Book[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BookList = ({ books, onToggleStatus, onDelete }: BookListProps) => {
  if (books.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
        Aucun livre trouvé.
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onToggleStatus={onToggleStatus} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};
