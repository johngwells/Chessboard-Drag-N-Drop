// Observer is a minimal way to to subscribe to changing state. Could make an EventEmitter but it's only a single change event

export function observe(receive) {
  const randomPos = () => Math.floor(Math.random() * 8);
  setInterval(() => receive([randomPos(), randomPos()]), 1000);
}
