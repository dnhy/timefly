import React from 'react';
import Label from '../Label';

export default function Attachs({ attachs }) {
  return (
    <div>
      <Label icon={require('@/images/img_link.png')} text="Attachment" />
      <div className="w-[98%] flex">
        {attachs?.map((attach) => (
          <div
            key={attach.attachguid}
            className="w-24 h-24 rounded-main-theme menu-active px-2 py-3 mr-2"
          >
            <img
              className="w-5 h-5 mb-2"
              src={require('@/images/img_attach.png')}
              alt=""
            />
            <div className="mb-1 text-black">{attach.title}</div>
            <div className="text-grey-text-color text-sm">
              {attach.uploadtime?.split(' ')[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
