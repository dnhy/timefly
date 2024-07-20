import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Head from '@/components/Head';
import Menubar from '@/components/Menubar';
import TaskProgress from '@/components/TaskProgress';
import routes from './routes';
import Navbar from '@/components/Navbar';
import Detail from '@/components/Detail';
import { useCurrRoute } from '@/hooks';

export default function App() {
  const element = useRoutes(routes);

  const [collapse, setCollapse] = useState(false);
  const hasDetail = useCurrRoute(routes)?.meta?.hasDetail;

  function showMenu() {
    setCollapse(!collapse);
  }
  return (
    <div className="w-full h-full min-h-screen  flex unselectable">
      <div
        className={`${collapse ? 'w-20' : 'w-80'} bg-grey-color transition-all relative`}
      >
        <Head showMenu={showMenu} collapse={collapse} />
        <Menubar routes={routes} collapse={collapse} />
        {!collapse && <TaskProgress />}

        {collapse && (
          <img
            className="w-8 h-8  absolute  bottom-3 left-1/2 -translate-x-1/2"
            src={require('./images/img_expand.png')}
            alt=""
            onClick={showMenu}
          />
        )}
      </div>

      <div className="flex-1 flex">
        <div className={`${hasDetail ? 'w-2/3' : 'w-full'}  border-x`}>
          <Navbar routes={routes} />
          <hr className="bg-[#F2F2F2] mt-4" />
          {element}
        </div>
        {hasDetail && (
          <div className="h-screen flex-1  overflow-scroll">
            <Detail />
          </div>
        )}
      </div>
    </div>
  );
}
