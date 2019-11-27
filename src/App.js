import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import SortVisualizer from './components/SortVisualizer'
import { MyProvider } from './MyProvider'
import './App.css'


function App() {
  return (
    <MyProvider>
      <div className="App">
        <SortVisualizer />
      </div>
    </MyProvider>
  );
}

export default App;
