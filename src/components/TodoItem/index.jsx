import React, { useState, useMemo } from 'react';
import { Checkbox } from 'antd';
import { ConfigProvider } from 'antd';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import { selectTodo } from '@/redux/actions/todos';
import DataTag from '@/components/DataTag';
import DataTagWrap from '@/components/DataTagWrap';

function TodoItem({
  todo,
  onChangeComplete,
  selectTodo: selectTodoFunc,
  selectItem,
}) {
  const { todoname, complete, tags, attachs, comments, createtime } = todo;
  const dataTags = [
    {
      inActiveImg: require('@/images/img_link.png'),
      activeImg: require('@/images/img_link_white.png'),
      data: attachs?.length || 0,
    },
    {
      inActiveImg: require('@/images/img_chat.png'),
      activeImg: require('@/images/img_chat_white.png'),
      data: comments?.length || 0,
    },
    {
      inActiveImg: require('@/images/img_calendar_small.png'),
      activeImg: require('@/images/img_calendar_white.png'),
      data: createtime?.split(' ')[0],
    },
  ];
  const [isHover, setIsHover] = useState(false);

  const isChoose = useMemo(() => selectItem?._id === todo._id, [selectItem]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  function handleClick() {
    selectTodoFunc(todo);
  }
  return (
    <div
      className={`rounded-main-theme mb-4 cursor-pointer menu-active mx-6 px-3 py-2 ${isHover && !isChoose ? 'border-main-theme bg-[#f5f6ff]' : ''} ${isChoose ? 'border-main-theme bg-main-theme' : ''} ${complete ? 'bg-[#F6F6F6]' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <ConfigProvider
        theme={{ token: { colorPrimary: '#6061F6', colorBorder: '#6061F6' } }}
      >
        <Checkbox checked={complete} onChange={onChangeComplete}>
          <span
            className={`${complete ? 'todo-complete' : ''} ${isChoose ? 'text-white' : 'text-text-color'}`}
          >
            {todoname}
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
                  isHover={isChoose}
                />
              )}
            />
          </div>
          <div className="ml-6 flex flex-wrap">
            {tags ? (
              tags.map((t) => (
                // eslint-disable-next-line react/jsx-indent
                <Tag className="mb-2" key={t} color={t.type}>
                  {t.name}
                </Tag>
              ))
            ) : (
              <div className="mb-2"> </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default connect(
  (state) => ({
    selectItem: state.todosReducer,
  }),
  { selectTodo },
)(TodoItem);
