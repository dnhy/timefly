import React, { useState } from 'react';
import { Progress } from 'antd';

export default function TaskProgress() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-sm font-ZhankuFont text-grey-text-color px-[10%] py-[5%] mx-auto my-2">
        Task Progress
      </div>
      <div className="w-menubar px-4 mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-4 h-4 mr-2"
              src={require('../../images/img_file.png')}
              alt=""
            />
            <div className="text-sm">My Work Task</div>
          </div>
          <img
            className={`w-4 h-4 transition-all duration-300 ${open ? '' : 'rotate-180'}`}
            src={require('../../images/img_arrow.png')}
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div
          className={`grid transition-all overflow-hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <ul className="min-h-0">
            <li className="flex ml-6 mt-3 items-center my-4">
              <Progress
                className="mr-6"
                type="circle"
                percent={65}
                size={18}
                strokeColor="#6061F6"
              />
              <div className="text-sm">Coding</div>
            </li>
            <li className="flex ml-6 mt-3 items-center my-4">
              <Progress
                className="mr-6"
                type="circle"
                percent={50}
                size={18}
                strokeColor="#6061F6"
              />
              <div className="text-sm">Testing</div>
            </li>
            <li className="flex ml-6 mt-3 items-center my-4">
              <Progress
                className="mr-6"
                type="circle"
                percent={50}
                size={18}
                strokeColor="#6061F6"
              />
              <div className="text-sm">desinging</div>
            </li>
            <li className="flex ml-6 mt-3 items-center my-4">
              <Progress
                className="mr-6"
                type="circle"
                percent={50}
                size={18}
                strokeColor="#6061F6"
              />
              <div className="text-sm">desinging</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
