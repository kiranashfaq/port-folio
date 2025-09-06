import { useState,useEffect } from 'react'

import Home from './components/Home'
import './App.css'
import Loader from './components/loader'
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Home/>}

    </div>
  );
};

export default App
