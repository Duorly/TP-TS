import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BookCard = ({ book, onToggleStatus, onDelete }: BookCardProps) => {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{book.titre}</h3>
      <p style={{ color: '#444', marginBottom: '1rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
        by {book.auteur}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            backgroundColor: book.disponible ? '#00AA00' : '#AA0000',
            border: '1px solid black'
          }} />
          <span style={{ fontSize: '0.85rem' }}>
            {book.disponible ? 'Available' : 'Borrowed'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => onToggleStatus(book.id)}
            style={{ flex: 1 }}
          >
            {book.disponible ? 'Borrow' : 'Return'}
          </button>
          <button 
            onClick={() => onDelete(book.id)}
            style={{ flex: 1, color: '#AA0000' }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
