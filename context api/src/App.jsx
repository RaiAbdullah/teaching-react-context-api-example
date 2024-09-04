// App.js
import React from 'react';
import { NameProvider } from './NameContext';
import NameInput from './NameInput';
import NameDisplay from './NameDisplay';

const App = () => {
  return (
    <NameProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Context API Example</h1>
        <NameInput />
        <NameDisplay />
      </div>
    </NameProvider>
  );
};

export default App;
