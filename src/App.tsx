import { useEffect, useState } from 'react';
import './sass/App.scss'
import type { FullOffice } from './types/FullOffice.interface';

function App() {
  const [fileContent, setFileContent] = useState<null | FullOffice>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log(file)
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        setFileContent(json);
        console.log(json);
      } catch (err) {
        console.error("Invalid JSON", err);
      }
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    fetch('/za_zmarlych.json')
      .then(res => res.json())
      .then(setFileContent)
      .catch(err => console.error("Failed to load default file", err));
  }, []);

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
