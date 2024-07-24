/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import Point from '../Point';
import Label from '../Label';
import SubComment from '../SubComment';
import CommentForm from '../CommentForm';
import { toggleForm } from '@/redux/actions/comForm';
import { getTimeStamp } from '@/utils';

function Comments({
  comments,
  showFormId,
  toggleForm: toggleFormFunc,
  onLike,
}) {
  function calcUsername(id) {
    return comments.find((c) => c.id === id)?.username;
  }

  const commentsSort = comments.sort(
    (c1, c2) => getTimeStamp(c1.publishtime) - getTimeStamp(c2.publishtime),
  );

  return (
    <div className="mt-8">
      <Label icon={require('@/images/img_chat.png')} text="Comments" />
      {commentsSort
        .filter((c) => !c.to)
        .map((c) => (
          <div
            className="w-[98%] bg-grey-color px-3 py-3 rounded-main-theme mx-auto my-3"
            key={c.id}
          >
            <div className="flex justify-between">
              <div className="flex">
                <img
                  className="w-6 h-6 mr-3"
                  src={require('@/images/img_comment_avatar.png')}
                  alt=""
                />
                <div>{c.username}</div>
              </div>
              <div className="text-gray-400">{c.publishtime}</div>
            </div>
            <div className="my-3">{c.content}</div>

            <div className="flex items-center">
              <motion.div
                className="w-6 h-6  rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8, rotate: -45 }}
              >
                <img
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => {
                    onLike(c.id);
                  }}
                  src={
                    c.isLike
                      ? require('@/images/img_press.png')
                      : require('@/images/img_unpress.png')
                  }
                  alt=""
                />
              </motion.div>

              <Point />
              <div
                className="cursor-pointer underline-animate"
                onClick={() => {
                  toggleFormFunc(c.id);
                }}
              >
                Reply
              </div>
            </div>
            <CommentForm showForm={showFormId === c.id} />

            <div className="mt-2">
              {commentsSort
                .filter((sc) => sc.fa === c.id)
                .map((sc) => (
                  <SubComment
                    sc={sc}
                    key={sc.id}
                    tousername={calcUsername(sc.to)}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default connect(
  (state) => ({
    showFormId: state.comFormReducer,
  }),
  { toggleForm },
)(Comments);
