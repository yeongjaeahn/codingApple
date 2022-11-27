import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let [blogName, setBlogName] = useState([
    '남자코트추천',
    '여자코트추천',
    '아동복추천',
  ]);
  let [wishCount, setWishCount] = useState(0);

  return (
    <div className="App">
      <div style={{ backgroundColor: 'black', color: 'white', padding: 20 }}>
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>
          {blogName}{' '}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setWishCount(wishCount + 1);
            }}
          >
            🧡
          </span>
          {wishCount}
        </h4>
        <p>날짜</p>
      </div>
      <div className="list">
        <h4>
          {blogName}{' '}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setWishCount(wishCount + 1);
            }}
          >
            🧡
          </span>
          {wishCount}
        </h4>
        <p>날짜</p>
      </div>
      <div className="list">
        <h4>
          {blogName}{' '}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setWishCount(wishCount + 1);
            }}
          >
            🧡
          </span>
          {wishCount}
        </h4>
        <p>날짜</p>
      </div>
    </div>
  );
}

export default App;
