import { nanoid } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export function getTodos() {
  return [
    {
      id: nanoid(),
      todoname: 'Code Review',
      complete: false,
      describtion:
        'Here is some describtion.Here is some describtion.Here is some describtion.Here is some describtion.',
      taskid: nanoid(),
      taskname: 'My Work Task',
      progressid: nanoid(), // 可有可无
      progressname: 'Coding',

      tags: [
        { id: '1212wqwqwqw', name: 'Code', type: 'success' },
        { id: 'qwqs211as121', name: 'Review', type: 'processing' },
      ], // 多个tag的id
      attachs: [
        {
          attachguid: nanoid(),
          downloadurl: 'XXXXX',
          title: '1.text',
          uploadtime: '2022/12/31 9:00:00',
        },
      ],
      comments: [
        {
          id: 'firstxxxx',
          username: 'Alice',
          publishtime: '2023/3/2 12:03',
          content: 'Good idea!',
          to: null,
          isLike: false,
        },
        {
          id: 'reply1',
          to: 'firstxxxx',
          fa: 'firstxxxx',
          username: 'Freren',
          publishtime: '2023/3/2 19:03',
          content: 'Good comment!',
        },
        {
          id: 'reply2',
          username: 'Aren',
          to: 'reply1',
          fa: 'firstxxxx',
          publishtime: '2023/3/2 19:08',
          content: "I'll join in the fun",
        },
      ],
      createtime: '2024/8/20 9:12',
    },
    {
      id: nanoid(),
      todoname: 'Pull Request',
      complete: true,
    },
  ];
}
