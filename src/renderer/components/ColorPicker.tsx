import React, { useState } from 'react';



const ColorPicker: React.FC = ( ) => {
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setSelectedColor(color);
    window.electronapi.sendColorToMain(color);
  };

  return (
    <input
      type="color"
      value={selectedColor}
      onChange={handleColorChange}
    />
  );
};

export default ColorPicker;
