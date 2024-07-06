import React from 'react';

export default function Head({ showMenu, collapse }) {
  return collapse ? (
    <div className="flex justify-around items-center mt-8">
      <img
        src={require('../../images/img_avatar.png')}
        className="w-10 h-10 rounded-full"
        alt=""
      />
    </div>
  ) : (
    <div className="w-menubar flex justify-between items-center rounded-main-theme border-solid border border-border-color px-[10%] py-[5%] mx-auto mt-8 bg-white">
      <img
        src={require('../../images/img_avatar.png')}
        className="w-1/5 h-1/5 rounded-full"
        alt=""
      />
      <div className="text-2xl font-ZhankuFont">dnhy</div>
      <img
        className="w-[15%] h-[15%] cursor-pointer"
        src={require('../../images/img_collpase.png')}
        alt=""
        onClick={showMenu}
      />
    </div>
  );
}
