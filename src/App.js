import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Home from "./routes/Home";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppHeader/>
      <Home/>
    </div>
  );
}

export default App;
