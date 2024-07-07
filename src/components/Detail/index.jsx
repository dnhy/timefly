import React from 'react';
import { Tag } from 'antd';
import Point from '../Point';

export default function Detail() {
  return (
    <div className="text-text-color">
      <div className="w-[92%] text-2xl mx-auto my-4">Task Details</div>
      <div className="w-[92%] rounded-main-theme menu-active h-full mx-auto px-3">
        <div className="text-sm font-ZhankuFont text-grey-text-color  py-2 mx-auto  my-2">
          My Work Task
        </div>

        <div className="text-3xl mb-2">This is a title</div>
        <div className="text-base mb-6">
          Here is some describtion.Here is some describtion.Here is some
          describtion.Here is some describtion.
        </div>

        <div className="mb-10">
          <div className="flex justify-between mb-3">
            <div className="text-[#6e6ee3] opacity-80">Timeline</div>
            <div className="w-3/4">2024/7/1</div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-[#6e6ee3] opacity-80">Time</div>
            <div className="w-3/4">9:00</div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-[#6e6ee3] opacity-80">Progress</div>
            <div className="w-3/4">Coding</div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="text-[#6e6ee3] opacity-80">Tag</div>
            <div className="w-3/4 leading-8">
              <Tag color="success">success</Tag>
              <Tag color="processing">processing</Tag>
              <Tag color="error">error</Tag>
              <Tag color="warning">warning</Tag>
              <Tag color="default">default</Tag>
            </div>
          </div>
        </div>
        <div>
          <div className="flex my-3">
            <img
              className="w-5 h-5 mr-2"
              src={require('@/images/img_link.png')}
              alt=""
            />
            <span className="">Attachment</span>
          </div>
          <div className="w-[98%] flex">
            <div className="w-24 h-24 rounded-main-theme menu-active px-2 py-3 mr-2">
              <img
                className="w-5 h-5 mb-2"
                src={require('@/images/img_attach.png')}
                alt=""
              />
              <div className="mb-1 text-black">file.txt</div>
              <div className="text-grey-text-color text-sm">2022/11/12</div>
            </div>
            <div className="w-24 h-24 rounded-main-theme menu-active px-2 py-3 mr-2">
              <img
                className="w-5 h-5 mb-2"
                src={require('@/images/img_attach.png')}
                alt=""
              />
              <div className="mb-1 text-black">file.txt</div>
              <div className="text-grey-text-color text-sm">2022/11/12</div>
            </div>
            <div className="w-24 h-24 rounded-main-theme menu-active px-2 py-3 mr-2">
              <img
                className="w-5 h-5 mb-2"
                src={require('@/images/img_attach.png')}
                alt=""
              />
              <div className="mb-1 text-black">file.txt</div>
              <div className="text-grey-text-color text-sm">2022/11/12</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex my-3">
            <img
              className="w-5 h-5 mr-2"
              src={require('@/images/img_chat.png')}
              alt=""
            />
            <span className="">Comments</span>
          </div>
          <div className="w-[98%] bg-grey-color px-3 py-3 rounded-main-theme mx-auto my-3 ">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-6 h-6 mr-3"
                  src={require('@/images/img_comment_avatar.png')}
                  alt=""
                />
                <div>alice</div>
              </div>
              <div className="text-gray-400 ">12:03</div>
            </div>
            <div className="my-3">
              good idea! good idea! good idea! good idea! good idea!
            </div>
            <div className="flex items-center">
              <img
                className="w-6 h-6"
                src={require('@/images/img_press.png')}
                alt=""
              />
              <Point />
              <div>Reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
