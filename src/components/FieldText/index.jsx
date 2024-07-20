import React from 'react';

export default function FieldText({ name, value, children }) {
  return (
    <div className="flex justify-between mb-3">
      <div className="text-label-color opacity-80">{name}</div>
      {children ? (
        <div className="w-3/4 leading-8">{children} </div>
      ) : (
        <div className="w-3/4">{value || '--'} </div>
      )}
    </div>
  );
}
