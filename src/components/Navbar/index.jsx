import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Point from '../Point';
import { capitalizeFirstLatter } from '@/utils/index';

export default function Navbar({ routes }) {
  const { pathname } = useLocation();
  const routeArr = pathname.split('/').filter((item) => item !== '');
  return (
    <div className="mx-6  mt-12">
      <div className="flex items-center">
        {routeArr.map((e, index) => (
          <Fragment key={e}>
            <div className="text-[#766E9D] text-sm">{e}</div>
            {index !== routeArr.length - 1 ? <Point /> : ''}
          </Fragment>
        ))}
      </div>
      <div className="text-text-color  text-3xl font-bold  mt-4 mb-6">
        {/* Todo: 先这样写，后续改成从redux获取兄弟组件todo中处理的数据 */}
        {capitalizeFirstLatter(document.title)}
      </div>
    </div>
  );
}
