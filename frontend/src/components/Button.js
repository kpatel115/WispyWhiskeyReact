import React from 'react';

const Button = (props) => {

  return (
    <div>
    <Button onClick={props.onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      {props.children}
    </Button>
  </div>
  );
};

export default Button;