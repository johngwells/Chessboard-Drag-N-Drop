import Square from './Square';

import { ItemTypes } from './Constants';
import { canMoveKnight, moveKnight } from './Game';
import { useDrop } from 'react-dnd';

export default function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: monitor => ({
        isOver: !!monitor.isOver()
      })
    }),
    [x, y]
  );

  return (
    <div
      ref={drop}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Square black={black}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: '#E43480'
          }}
        />
      )}
    </div>
  );
}
