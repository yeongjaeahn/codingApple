import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let post = '강남 우동 맛집';
  let [a, b] = useState('남자코트추천');

  return (
    <div className="App">
      <div style={{ backgroundColor: 'black', color: 'white', padding: 20 }}>
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>날짜</p>
      </div>
    </div>
  );
}

export default App;
