import React, { useEffect, useState } from 'react';
import './App.css';
import MainRouter from './routes/MainRouter';
import Preloader from './components/Preloader'; // Adjust the path as necessary

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Preloader /> : <MainRouter />}
    </div>
  );
}

export default App;
