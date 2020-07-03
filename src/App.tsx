import React from 'react';
import Button from './components/button/button';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Normal</Button>
        <Button size="lg" btnType="primary">Large Button</Button>
        <Button disabled={true}>Normal</Button>
        <Button btnType="link" href="http://www.baidu.com">Normal</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
