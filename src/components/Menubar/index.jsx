import React from 'react';
import PubSub from 'pubsub-js';
import { Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { DEFAULTTITLE } from '@/constants';
import { useCurrRoute } from '@/hooks';
import { handleRoutes } from '@/utils';

export default function Menubar({ routes, collapse }) {
  const route = useCurrRoute(routes);
  const { pathname } = useLocation();
  const general = handleRoutes(routes);

  document.title = route?.meta.title || DEFAULTTITLE;
  PubSub.publish('routename', route?.meta.title);

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
      PubSub.publish('routename', e.meta.title);
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
      {general
        .filter((e) => e.meta !== undefined && !e.meta.hidden)
        // eslint-disable-next-line arrow-body-style
        .map((e) => {
          return collapse ? (
            <div
              key={e.path}
              onClick={handleMenuClick(e)}
              className={`w-3/5 mx-auto  py-1 rounded-main-theme cursor-pointer mb-6  ${
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
