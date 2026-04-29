export interface Book {
  id: string;
  titre: string;
  auteur: string;
  disponible: boolean;
}

export type BookCollection = Record<string, Book>;
