import React from 'react';

const MyButton = ({ text, onClick }) => {

  return (
    <button
      onClick={"/Portfolio"}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default MyButton;
