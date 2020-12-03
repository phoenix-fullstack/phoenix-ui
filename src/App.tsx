import React, { useState } from 'react';
import Button from './components/button';
import Icon from './components/icon';
import Alert from './components/alert';
import Menu from './components/menu';

import './styles/index.scss';

const { SubMenu, MenuItem } = Menu;

function App() {
  const [show, setShow] = useState<boolean>(true);
  const handleClose = (e: HTMLDivElement) => {
    console.log(e)
  }
  console.log(show)
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode="vertical">
          <SubMenu index="0-1" title="菜单1">
            <MenuItem>1-1</MenuItem>
            <MenuItem>1-2</MenuItem>
            <MenuItem>1-3</MenuItem>
          </SubMenu>
          <SubMenu index="0-2" title="菜单2">
            <MenuItem>2-1</MenuItem>
            <MenuItem>2-2</MenuItem>
            <MenuItem>2-3</MenuItem>
          </SubMenu>
        </Menu>
        <Alert title="this is a test alert" onClose={handleClose} isClose={show}>
          <span>Test</span>
        </Alert>
        <Icon theme="success" icon="coffee" size="10x" />
        <Button btnType="danger" onClick={
          () => {
            setShow(show => !show);
          }
        }>Normal</Button>
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
