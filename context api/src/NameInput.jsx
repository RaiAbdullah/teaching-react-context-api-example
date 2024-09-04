
import React, { useContext } from 'react';
import { NameContext } from './NameContext';

const NameInput = () => {
  const { setName } = useContext(NameContext);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>
  );
};

export default NameInput;
