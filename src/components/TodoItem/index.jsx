import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { ConfigProvider } from 'antd';
import { Tag } from 'antd';
import DataTag from '@/components/DataTag';
import DataTagWrap from '@/components/DataTagWrap';

export default function TodoItem({ id, name, complete, onChangeComplete }) {
  const dataTags = [
    {
      inActiveImg: require('@/images/img_link.png'),
      activeImg: require('@/images/img_link_white.png'),
      data: '2121',
    },
    {
      inActiveImg: require('@/images/img_chat.png'),
      activeImg: require('@/images/img_chat_white.png'),
      data: '789',
    },
    {
      inActiveImg: require('@/images/img_calendar_small.png'),
      activeImg: require('@/images/img_calendar_white.png'),
      data: '2024/8/20',
    },
  ];
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className={`rounded-main-theme mb-4 cursor-pointer menu-active mx-6 px-3 py-2 ${isHover ? 'bg-main-theme' : ''} ${complete ? 'bg-[#F6F6F6]' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ConfigProvider
        theme={{ token: { colorPrimary: '#6061F6', colorBorder: '#6061F6' } }}
      >
        <Checkbox checked={complete} onChange={onChangeComplete}>
          <span
            className={`${complete ? 'todo-complete' : ''} ${isHover ? 'text-white' : 'text-text-color'}`}
          >
            {name}
          </span>
        </Checkbox>
      </ConfigProvider>
      {!complete && (
        <>
          <div className="ml-6 mt-2 mb-2">
            <DataTagWrap
              items={dataTags}
              render={(product, isLastChild) => (
                <DataTag
                  key={product.data}
                  inActiveImg={product.inActiveImg}
                  activeImg={product.activeImg}
                  data={product.data}
                  isLastChild={isLastChild}
                  isHover={isHover}
                />
              )}
            />
          </div>
          <div className="ml-6 flex">
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </div>
        </>
      )}
    </div>
  );
}
