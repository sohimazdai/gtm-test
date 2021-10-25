import { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dog, setDog] = useState(null);

  const handleFetchDogClick = useCallback(async () => {
    try {
      const response = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();

      setDog(response.message);
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>
        <button onClick={handleFetchDogClick}>fetch a dog</button>
      </p>
      {dog && <img src={dog} />}
    </div>
  );
}

export default App;
