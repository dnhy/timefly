import React, { useRef, useState } from 'react';
import { Form, Input } from 'antd';
import { ConfigProvider } from 'antd';

export default function CommentForm({ showForm }) {
  const formRef = useRef(null);
  const maxLength = useRef(500);
  const [showTextTools, setShowTextTools] = useState(false);
  const [textCount, setTextCount] = useState(0);

  function onTextAreaChange(e) {
    const { length } = e.target.value;
    setShowTextTools(length > 0);
    setTextCount(length);
  }

  return (
    <div
      ref={formRef}
      className={`grid  transition-all duration-300 overflow-hidden ${showForm ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
    >
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBorderColor: '#6061F6',
              hoverBorderColor: '#6061F6',
            },
          },
        }}
      >
        <Form className="mt-2 min-h-0">
          <Input
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
            placeholder="name*"
          />{' '}
          <Input
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
            }}
            placeholder="email*"
          />
          <Input.TextArea
            style={{
              width: 'calc(100% - 8px)',
              marginTop: '10px',
              resize: 'none',
            }}
            maxLength={maxLength}
            rows={4}
            placeholder="Welcome to comment!"
            onChange={onTextAreaChange}
          />
          {showTextTools && (
            <div className="flex justify-end items-center z-50 relative bottom-6 right-4">
              <div className="mr-3 text-xs text-grey-text-color font-ZhankuFont">
                {`${textCount}/${maxLength.current}`}
              </div>
              <div className="flex cursor-pointer">
                <img
                  className="size-5"
                  src={require('@/images/img_send.png')}
                  alt=""
                />
                <div className="ml-1">send</div>
              </div>
            </div>
          )}
        </Form>
      </ConfigProvider>
    </div>
  );
}
