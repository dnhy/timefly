/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Head from './components/Head';
import Menubar from './components/Menubar';
import TaskProgress from './components/TaskProgress';
import routes from './routes';

export default function Index() {
  const element = useRoutes(routes);

  const [collapse, setCollapse] = useState(false);

  function showMenu() {
    setCollapse(!collapse);
  }
  return (
    <div className="w-full h-full min-h-screen bg-slate-400 flex relative">
      <div
        className={`${!collapse ? 'w-80' : 'w-24'} bg-grey-color transition-all`}
      >
        <Head showMenu={showMenu} collapse={collapse} />
        <Menubar routes={routes} collapse={collapse} />
        {!collapse && <TaskProgress />}

        {collapse && (
          <img
            className="w-8 h-8  absolute  bottom-3 left-8 right-0 cursor-pointer"
            src={require('./images/img_expand.png')}
            alt=""
            onClick={showMenu}
          />
        )}
      </div>

      <div className="w-1/2 bg-[#75a3ff] ">{element}</div>
      <div className="flex-1 bg-[#70ff75]" />
    </div>
  );
}
