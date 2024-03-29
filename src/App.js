import { canMoveKnight, moveKnight } from './components/Game';

import Knight from './components/Knight';
import BoardSquare from './components/BoardSquare';

import './App.css';

function handleClick(toX, toY) {
  console.log({ toX, toY });
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

// creates the board of the game
function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  // const black = (x + y) % 2 === 1;
  // const isKnightHere = x === knightX && y === knightY;
  // const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      onClick={() => handleClick(x, y)}
      key={i}
      style={{ flex: '1 0 12%', width: '12.5vw', height: '12.5vh' }}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

export default function App({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
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
    </div>
  );
}
