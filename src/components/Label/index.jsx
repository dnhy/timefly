import React from 'react';

export default function Label({ icon, text }) {
  return (
    <div className="flex my-3 items-center">
      <img className="w-5 h-5 mr-2" src={icon} alt={text} />
      <span className="">{text}</span>
    </div>
  );
}
