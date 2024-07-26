import React from 'react';
import { Slider } from 'antd';

export default function ProgreeDrag({ percent, handlePercentChange }) {
  const handleChange = (val) => {
    handlePercentChange(val);
  };
  const formatter = (value) => `${value}%`;

  return (
    <Slider
      value={percent}
      onChange={handleChange}
      step={10}
      tooltip={{
        formatter,
      }}
    />
  );
}
