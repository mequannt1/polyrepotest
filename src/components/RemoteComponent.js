
import React, { useState } from 'react';

function RemoteComponent() {
  // Adding state to track if the button has been clicked
  const [clicked, setClicked] = useState(false);

  // Handle button click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Remote Component</h2>
      <p className={`text-lg ${clicked ? 'text-green-500' : 'text-red-500'} mb-4`}>
        {clicked ? 'Button clicked!' : 'Button not clicked'}
      </p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Click Me
      </button>
    </div>
  );
}

export default RemoteComponent;
