import React from 'react';
import './css/App.css';
import FruitMenu from './components/FruitMenu'
import CartSideBar from './components/CartSideBar'

function App() {
  return (
    <div className="App">
      <CartSideBar/>
      <div className="App-header">Half Foods' Fruit Stand</div>
      <FruitMenu/>
    </div>
  );
}

export default App;
