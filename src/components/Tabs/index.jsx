import React from 'react';

export default function Tabs({ items, active, onChangeTab }) {
  return (
    <div className="mt-2 w-60">
      <ul className="flex text-[#5454F6] justify-between">
        {items.map((item) => (
          <li
            key={item.key}
            className={`${active !== item.key ? 'opacity-50' : ''} cursor-pointer`}
            onClick={() => onChangeTab(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
