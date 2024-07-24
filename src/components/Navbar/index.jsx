import React, { Fragment, useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
import { useLocation } from 'react-router-dom';
import Point from '../Point';
import { capitalizeFirstLatter } from '@/utils/index';

export default function Navbar() {
  const { pathname } = useLocation();
  const routeArr = pathname.split('/').filter((item) => item !== '');
  const [routateName, setRoutateName] = useState('');
  useEffect(() => {
    const token = PubSub.subscribe('routename', (_, title) => {
      setRoutateName(title);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

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
        {capitalizeFirstLatter(routateName)}
      </div>
    </div>
  );
}
