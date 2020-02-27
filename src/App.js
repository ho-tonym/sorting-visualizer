import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import SortVisualizer from './components/SortVisualizer'
import { MyProvider } from './MyProvider'
import styles from './App.module.css'


function App() {
  return (
    <MyProvider>
      <div className={styles.App}>
        <SortVisualizer />
      </div>
    </MyProvider>
  );
}

export default App;
