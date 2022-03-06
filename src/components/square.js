export default function Square({ black, children }) {
  const fill = black ? '#4C3260' : '#EFEBE0';
  const stroke = black ? '#EFEBE0' : '#4C3260';

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
