import stackList from '../../dataBases/stackList';
import { useState } from 'react';

export default function PortfolioStackListItems() {
  const [stackItem, setStackItem] = useState(stackList);

  return (
    <>
      <h3>Select Technology Stack</h3>
      <ul>
        {Object.values(stackItem).map(stack => (
          <li>{stack}</li>
        ))}
      </ul>
    </>
  );
}
