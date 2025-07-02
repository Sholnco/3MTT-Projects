import './App.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main>
      <h1>Click Counter</h1>
      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      {count === 10 && <p className="limit-message">You've reached the limit!</p>}
    </main>
  );
}

export default App;

