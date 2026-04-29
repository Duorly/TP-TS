import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const BookCard = ({ book, onToggleStatus, onDelete }: BookCardProps) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '0.5rem' }}>{book.titre}</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>par {book.auteur}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ 
          color: book.disponible ? 'var(--success)' : 'var(--danger)',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>
          {book.disponible ? '✓ Disponible' : '✗ Emprunté'}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => onToggleStatus(book.id)}
            style={{ 
              backgroundColor: book.disponible ? 'var(--danger)' : 'var(--success)',
              padding: '0.5rem 1rem',
              fontSize: '0.8rem'
            }}
          >
            {book.disponible ? 'Emprunter' : 'Rendre'}
          </button>
          <button 
            onClick={() => onDelete(book.id)}
            style={{ 
              backgroundColor: 'transparent',
              border: '1px solid var(--danger)',
              color: 'var(--danger)',
              padding: '0.5rem 1rem',
              fontSize: '0.8rem'
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};
