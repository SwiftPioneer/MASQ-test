import React from 'react';
import ColorPicker from './ColorPicker';
import '../styles/main.scss';
const Home: React.FC = () => {
  return (
    <div className="center-container">
      <div>
        <h1>Welcome to Electron!</h1>
        <ColorPicker />
      </div>
    </div>
  );
};

export default Home;
