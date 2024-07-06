import React from 'react';
import { Popover } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ExclamationCircleTwoTone } from '@ant-design/icons';

export default function Menubar({ routes, collapse }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const content = (
    <div>
      <ExclamationCircleTwoTone twoToneColor="red" className="mr-1" /> The menu
      has been forbidden!
    </div>
  );
  function handleMenuClick(e) {
    return () => {
      if (e.meta.forbidden) {
        return;
      }
      navigate(e.path);
    };
  }
  return (
    <div>
      <div
        className={`text-sm font-ZhankuFont text-grey-text-color px-[10%] py-[5%] mx-auto  my-2 ${collapse ? 'opacity-0' : ''}`}
      >
        General
      </div>
      {routes
        .filter((e) => e.meta !== undefined && !e.meta.hidden)
        // eslint-disable-next-line arrow-body-style
        .map((e) => {
          return collapse ? (
            <div
              key={e.path}
              onClick={handleMenuClick(e)}
              className={`w-4/5 mx-auto px-5 py-1 rounded-main-theme cursor-pointer mb-6  ${
                pathname === e.path ? 'menu-active' : ''
              } ${e.meta.forbidden ? ' opacity-50 ' : ''}`}
            >
              {e.meta.forbidden ? (
                <Popover placement="right" content={content}>
                  <img className="mx-auto w-8 h-8" src={e.meta.icon} alt="" />
                </Popover>
              ) : (
                <img className="mx-auto w-8 h-8" src={e.meta.icon} alt="" />
              )}
            </div>
          ) : (
            <div
              className={`w-menubar flex items-center rounded-main-theme px-[10%] py-[5%] mx-auto mb-6 cursor-pointer ${
                pathname === e.path ? 'menu-active' : ''
              } ${e.meta.forbidden ? ' opacity-50 ' : ''}`}
              key={e.path}
              onClick={handleMenuClick(e)}
            >
              <img className="w-8 h-8 mr-5" src={e.meta.icon} alt="" />

              {e.meta.forbidden ? (
                <Popover placement="right" content={content}>
                  <div className="text-3xl font-Zyfht h-10 ">
                    {e.meta.title}
                  </div>
                </Popover>
              ) : (
                <div className="text-3xl font-Zyfht h-10 ">{e.meta.title}</div>
              )}
            </div>
          );
        })}
    </div>
  );
}
