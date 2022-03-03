import './App.css';

import Knight from './components/Knight';
import Square from './components/square';

// App.js will be the board of the game
function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = x === knightX && y === knightY;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ flex: '1 0 12%',  width: '12.5vw', height: '12.5vh' }}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function App({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'
      }}
    >
    {squares}
      {console.log(squares.length)}
    </div>
  );
}
