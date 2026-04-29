import { useState } from 'react';

interface AddBookFormProps {
  onAdd: (titre: string, auteur: string) => void;
}

export const AddBookForm = ({ onAdd }: AddBookFormProps) => {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titre.trim() && auteur.trim()) {
      onAdd(titre, auteur);
      setTitre('');
      setAuteur('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end' }}>
      <div style={{ flex: '1 1 300px' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>Book Title:</label>
        <input 
          type="text" 
          value={titre} 
          onChange={(e) => setTitre(e.target.value)} 
          placeholder="Type title here..."
          required
        />
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem' }}>Author:</label>
        <input 
          type="text" 
          value={auteur} 
          onChange={(e) => setAuteur(e.target.value)} 
          placeholder="Type author here..."
          required
        />
      </div>
      <button type="submit" style={{ flex: '0 0 auto', height: '35px' }}>
        Add Book
      </button>
    </form>
  );
};
