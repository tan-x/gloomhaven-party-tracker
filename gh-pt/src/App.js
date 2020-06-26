import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <div className="body">

      </div>
      {/* <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div> */}
    </ThemeProvider>
  );
}

export default App;
