import { useState,useEffect } from 'react'

import Home from './components/Home'
import './App.css'
import Loader from './components/loader'
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Home/>}
    </div>
  );
};

export default App
