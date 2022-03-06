import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

const knightStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '7rem'
}

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      style={{
        ...knightStyle,
        opacity: isDragging ? 0.5 : .9,
      }}
    >
      ♘
    </div>
  );
}
