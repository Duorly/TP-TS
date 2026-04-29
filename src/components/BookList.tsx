import { Book } from '../types/book';
import { BookCard } from './BookCard';
import { GenericList } from './GenericList';

interface BookListProps {
  books: Book[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BookList = ({ books, onToggleStatus, onDelete }: BookListProps) => {
  return (
    <GenericList 
      items={books}
      className="book-grid"
      emptyMessage="Aucun livre trouvé."
      renderItem={(book) => (
        <BookCard 
          book={book} 
          onToggleStatus={onToggleStatus} 
          onDelete={onDelete} 
        />
      )}
    />
  );
};
