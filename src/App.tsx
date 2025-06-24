import { useEffect, useState } from 'react';
import './sass/App.scss'
import './sass/Layout.scss'
import './sass/Switching.scss'
import type { FullOffice } from './types/FullOffice.interface';
import Invititation from './hours/Invitation';
import OfficeOfReadings from './hours/OfficeOfReadings';
import Laudes from './hours/Laudes';
import Header from './page/Header';
import OfficeHeader from './page/OfficeHeader';
import Aside from './page/Aside';
import Footer from './page/Footer';

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

  return (<>
    <Header />
    <nav><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta animi magni! Atque ad explicabo possimus ullam, ex nihil molestiae aut ipsa architecto? Nisi quasi omnis quidem consequuntur. Adipisci, et.
      Beatae delectus ipsa neque eum ullam culpa tenetur quisquam nam impedit saepe inventore corporis repudiandae, nemo velit veritatis aliquam autem, nisi dolor corrupti accusamus nihil. Aspernatur modi delectus earum molestias.</p></nav>
    <main>
      {
        fileContent === null ? <>
          <input type="file" accept=".json" onChange={handleFileChange} />
        </> : <>
          <OfficeHeader officeName={fileContent.name} date={new Date()} />
          <h1></h1>

          <ul>{
            fileContent && fileContent.hours.map((hour, idx) => <li><button onClick={e => setHour(idx)}>{hour.name}</button></li>)
          }
          </ul>
          {fileContent && hour === 0 && <Invititation {...(fileContent.hours[0])} />}
          {fileContent && hour === 1 && <OfficeOfReadings {...(fileContent.hours[1])} />}
          {fileContent && hour === 2 && <Laudes {...(fileContent.hours[2])} />}
        </>
      }

    </main>
    <Aside />
    <Footer />
  </>

  )
}

export default App
