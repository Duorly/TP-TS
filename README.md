# 🍎 Library Manager (System 7 Edition)

A premium Library Management System built with **React** and **TypeScript**, featuring a classic **macOS (System 7 / Platinum)** aesthetic.

## ✨ Features

- **Book Management**: Add, delete, and toggle availability of books.
- **Advanced State**: Managed using `Record<string, Book>` for efficient data handling.
- **Live Search & Filter**: Instant search by title/author and filtering by availability.
- **Persistence**: Data is saved locally via `LocalStorage` (custom hook).
- **Generic Components**: Includes a reusable `GenericList<T>` component.
- **Retro Aesthetic**: UI inspired by classic Macintosh systems (Platinum theme).

## 🛠️ Tech Stack

- **Core**: React 18
- **Language**: TypeScript (Strict Mode, no `any`)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Retro Old macOS theme)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Duorly/TP-TS.git
   cd TP-TS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/components`: UI components (BookCard, BookList, AddBookForm, etc.)
- `src/types`: TypeScript interfaces and types.
- `src/data`: Initial book collection.
- `src/hooks`: Custom hooks (e.g., `useLocalStorage`).
- `src/index.css`: Global retro styles.

## 📝 Assignment Requirements

This project was developed as part of a TypeScript & React TP, fulfilling the following criteria:
- [x] Use of `Record` for book management.
- [x] No usage of the `any` type.
- [x] Progressive implementation with clean commits.
- [x] Bonus: LocalStorage persistence.
- [x] Bonus: Generic list component.

---
*Built with ❤️ and a bit of nostalgia.*
