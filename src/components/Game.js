// Observer is a minimal way to to subscribe to changing state. Could make an EventEmitter but it's only a single change event

// export function observe(receive) {
//   const randomPos = () => Math.floor(Math.random() * 8);
//   setInterval(() => receive([randomPos(), randomPos()]), 1000);
// }

// logic for knight
let knightPosition = [0, 0];
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
