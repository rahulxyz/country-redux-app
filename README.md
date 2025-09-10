# Country App

A modern React application built with Vite and TypeScript for displaying, searching, sorting, and paginating a list of countries.

## Overview

This project demonstrates feature modularization using Redux for state management, ensuring clean separation of concerns and scalability. All core logic, including country data, filters, and pagination, is managed via redux.

## Features

- **TypeScript-first:** Type-safe codebase for reliability and maintainability
- **Modular architecture:** Features separated into context, types, and components
- **State management:** Centralized with Redux
- **Country listing:** Table view with columns for Name, Capital, Area, and Population
- **Search:** Filter countries by name
- **Sort:** Sort by Area or Population
- **Pagination:** Navigate with next/prev controls
- **Robust UI:** Loading and error states handled gracefully

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) (state management, Redux-like)


## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/country-app.git
cd country-app
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.  
_Note: The port may vary depending on your local setup; check your terminal for the exact

## Project Structure

```
src/
  hooks/           # Custom Hooks
  store/           # Redux for country state management
  page/country/    # Filters and ListView components
  types/           # TypeScript types and constants
  App.tsx
  main.tsx
```

## Customization

- Extend `ICountry` in `src/types/CountryType.ts` for more fields
- Integrate with your own API or update mock data in the context