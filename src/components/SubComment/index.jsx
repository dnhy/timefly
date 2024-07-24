import React, { useState } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../CommentForm';
import { toggleForm } from '@/redux/actions/comForm';

function SubComment({
  sc,
  showFormId,
  tousername,
  toggleForm: toggleFormFunc,
}) {
  const [showReply, setShowReply] = useState(false);

  return (
    <>
      <div
        className="flex items-center"
        onMouseEnter={() => setShowReply(true)}
        onMouseLeave={() => setShowReply(false)}
      >
        <div className="ml-6 w-[90%]">
          <span className="text-blue-400">{sc.username}</span>
          {sc.to === sc.fa ? (
            <span className="text-gray-400 ml-1">
              回复<span>{tousername}</span>：
            </span>
          ) : (
            <span className="text-gray-400 ml-1">：</span>
          )}
          <span className="break-all mr-2">{sc.content}</span>
          <span className="text-gray-400 text-xs relative bottom-[1px]">
            {sc.publishtime}
          </span>
        </div>
        {showReply && (
          <img
            className="inline-block size-5  cursor-pointer"
            src={require('@/images/img_reply.png')}
            alt=""
            onClick={() => {
              toggleFormFunc(sc.id);
            }}
          />
        )}
      </div>

      <CommentForm showForm={showFormId === sc.id} />
    </>
  );
}

export default connect(
  (state) => ({
    showFormId: state.comFormReducer,
  }),
  { toggleForm },
)(SubComment);
