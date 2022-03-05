// Observer is a minimal way to to subscribe to changing state. Could make an EventEmitter but it's only a single change event

// export function observe(receive) {
//   const randomPos = () => Math.floor(Math.random() * 8);
//   setInterval(() => receive([randomPos(), randomPos()]), 1000);
// }

// logic for knight
let knightPosition = [1, 7];
let observer = null;

// once the observer is set, passed in the knightPosition
function emitChange() {
  observer(knightPosition);
}

// observe passes in the root index.js (entire app)
export function observe(o) {
  if (observer) {
    throw new Error('Multi obsevers not implemented');
  }

  // set observer to the root index.js
  observer = o;
  emitChange();
}

// if knight is moved, it will call the observer, set knightPosition & recall the entire app to update state
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

// create knight L-Shape moves
// checks current position and dx/dy for the movement
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition; // 2, 5
  const dx = toX - x; // toX = 2 x = 1 dx = 1
  const dy = toY - y; // toY = 5 y = 7 dy = -2
  console.log({ dx, dy })

  // 1, 2 square movements (remove negatives & turn into positive only)
  // example: 1 square up & 2 square left
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}
