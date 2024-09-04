
import React, { useContext } from 'react';
import { NameContext } from './NameContext';

const NameDisplay = () => {
  const { name } = useContext(NameContext);

  return (
    <div>
      <h2>Your name is: {name}</h2>
    </div>
  );
};

export default NameDisplay;
