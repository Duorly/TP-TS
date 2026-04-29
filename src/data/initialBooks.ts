import { BookCollection } from '../types/book';

export const initialBooks: BookCollection = {
  '1': { id: '1', titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', disponible: true },
  '2': { id: '2', titre: '1984', auteur: 'George Orwell', disponible: false },
  '3': { id: '3', titre: 'Le Seigneur des Anneaux', auteur: 'J.R.R. Tolkien', disponible: true },
  '4': { id: '4', titre: "L'Étranger", auteur: 'Albert Camus', disponible: true },
};
