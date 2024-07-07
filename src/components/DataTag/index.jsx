import React from 'react';
import Point from '@/components/Point';

export default function DataTag({
  inActiveImg,
  activeImg,
  data,
  isLastChild,
  isHover,
}) {
  return (
    <>
      <img
        className="w-5 mr-2"
        src={!isHover ? inActiveImg : activeImg}
        alt=""
      />
      <div className={`${isHover ? 'text-white' : 'text-text-color'}`}>
        {data}
      </div>
      {!isLastChild && <Point />}
    </>
  );
}
