import { useEffect, useState } from 'react';
import './sass/App.scss'
import type { FullOffice } from './types/FullOffice.interface';
import Invititation from './hours/Invitation';
import OfficeOfReadings from './hours/OfficeOfReadings';
import type { TInvitation } from './types/Invitation.type';
import type { TOfficeOfReadings } from './types/OfficeOfReadings.type';
import type { TLaudes } from './types/Laudes.type';
import Laudes from './hours/Laudes';

function App() {
  const [fileContent, setFileContent] = useState<null | FullOffice>(null);
  const [hour, setHour] = useState(2);

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
      <h1>{fileContent?.name}</h1>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <ul>{
        fileContent && fileContent.hours.map((hour, idx) => <li><button onClick={e => setHour(idx)}>{hour.name}</button></li>)
      }
      </ul>
      <div className="hour-content">
        {fileContent && hour === 0 && <Invititation {...(fileContent.hours[0])} />}
        {fileContent && hour === 1 && <OfficeOfReadings {...(fileContent.hours[1])} />}
        {fileContent && hour === 2 && <Laudes {...(fileContent.hours[2])} />}
      </div>
    </main>
  )
}

export default App
