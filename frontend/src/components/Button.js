import React from 'react';

const Button = (props) => {

  return (
    <div>
    <h1>My React App</h1>
    <Button onClick={props.onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      {props.children}
    </Button>
  </div>
  );
};

export default Button;