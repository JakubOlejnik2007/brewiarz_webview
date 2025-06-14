import { useState } from 'react';
import './sass/App.scss'
import type { FullOffice } from './types/FullOffice.interface';

function App() {

  return (
    <main>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <ul>{
        fileContent && fileContent.hours.map((hour, idx) => <li><button>{hour.name}</button></li>)
      }
      </ul>
    </main>
  )
}

export default App
