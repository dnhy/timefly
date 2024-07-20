import React, { memo } from 'react';
import { Tag, Empty } from 'antd';
import { connect } from 'react-redux';
import { selectTodo } from '@/redux/actions/todos';
import Attachs from '@/components/Attachs';
import Comments from '@/components/Comments';
import FieldText from '@/components/FieldText';

function Detail({ selectItem }) {
  if (selectItem) {
    const {
      taskname,
      todoname,
      describtion,
      createtime,
      progressname,
      tags,
      attachs,
      comments,
    } = selectItem;

    const timeline = createtime?.split(' ')[0];
    const time = createtime?.split(' ')[1];

    return (
      <div className="text-text-color">
        <div className="w-[92%] text-2xl mx-auto my-4">Task Details</div>
        <div className="w-[92%] rounded-main-theme menu-active h-full mx-auto px-3">
          <div className="text-sm font-ZhankuFont text-grey-text-color  py-2 mx-auto  my-2">
            {taskname}
          </div>

          <div className="text-3xl mb-2">{todoname}</div>
          <div className="text-base mb-6">{describtion}</div>

          <div className="mb-10">
            <FieldText name="Timeline" value={timeline} />
            <FieldText name="Time" value={time} />
            <FieldText name="Progress" value={progressname} />
            <FieldText name="Tag">
              {tags
                ? tags.map((t) => (
                    // eslint-disable-next-line react/jsx-indent
                    <Tag key={t.id} color={t.type}>
                      {t.name}
                    </Tag>
                  ))
                : '--'}
            </FieldText>
          </div>
          {attachs?.length > 0 && <Attachs attachs={attachs} />}
          {comments?.length > 0 && <Comments comments={comments} />}
        </div>
      </div>
    );
  }

  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
}

export default connect(
  (state) => ({
    selectItem: state.todosReducer,
  }),
  { selectTodo },
)(memo(Detail));
