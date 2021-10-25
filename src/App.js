import { useCallback, useState } from 'react';
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
  }, [setDog]);

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
      {dog && <img src={dog} alt="fetched dog" />}
    </div>
  );
}

export default App;
