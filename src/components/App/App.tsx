import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import css from './App.module.css'
import SearchBar from "../SearchBar/SearchBar"

function App() {

    const notify = () => {
    toast.error('No movies found for your request.')
  }

  return (
     <>
      <Toaster position="top-center" />
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App
