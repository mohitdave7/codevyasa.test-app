import React from 'react';
import AllRoutes from './routes'
import './App.css';
import Home from './Components/nav';

function App() {
  return (
    <div className="App">
      <Home/>
      <AllRoutes/>
     </div>
  );
}

export default App;
