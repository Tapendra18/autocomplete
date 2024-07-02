import { useState } from 'react';
import './App.css';
import Autocomplete from './components/autocomplete';

function App() {
  return (
    <>
      <h1>Autocomplete / Typehead</h1>
      <Autocomplete
        placeholder={'Enter Recipe'}
        // staticData={{}}
        // fetchSuggestions={fetchSuggestions}
        dataKey={'name'}
        customLoading={<>Loading Recipes..</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </>
  );
}

export default App;
