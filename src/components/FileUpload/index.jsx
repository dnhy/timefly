import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const fileList = [
  {
    uid: '0',
    name: 'xxx.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
];
export default function FileUpload() {
  return (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
}
