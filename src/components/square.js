export default function Square({ black, children }) {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        color: stroke,
        backgroundColor: fill
      }}
    >
      {children}
    </div>
  );
}
