import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import AppRouter from "./routes/Router";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppHeader/>
      <AppRouter/>
    </div>
  );
}

export default App;
