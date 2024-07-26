import React from 'react';
import ReactDom from 'react-dom/client';
// import { config } from 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from '@/redux/store';
import App from './App';
import './index.css';

// const env = config().parsed || {};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryHover: '#6061F6',
              colorPrimary: '#6061F6',
            },
            components: {
              Slider: {
                handleSize: 0,
                handleSizeHover: 0,
                handleActiveColor: '#fff 1',
                handleActiveOutlineColor: '#fff 1',
              },
              Input: {
                activeBorderColor: '#6061F6',
                hoverBorderColor: '#6061F6',
                activeShadow: '0 0 0 2px #6061F6 0.1',
              },
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
