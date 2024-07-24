import React, { useState, useRef } from 'react';
import { Modal, Form, Input, Select, Tag, Button, Divider, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProgressDrag from '@/components/ProgressDrag';
import FileUpload from '@/components/FileUpload';

export default function AddTodo({ open, handleAdd }) {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  const options = [
    {
      value: 'gold',
    },
    {
      value: 'lime',
    },
    {
      value: 'green',
    },
    {
      value: 'cyan',
    },
  ];

  const [percent, setPercent] = useState(30);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
        }}
      >
        {label}
      </Tag>
    );
  };

  const dropdownRender = (menu) => (
    <>
      {menu}
      <Divider
        style={{
          margin: '8px 0',
        }}
      />
      <Space
        style={{
          padding: '0 8px 4px',
        }}
      >
        <Input
          style={{ width: '400px' }}
          placeholder="Please enter item"
          ref={inputRef}
          value={name}
          onChange={onNameChange}
          onKeyDown={(e) => e.stopPropagation()}
        />
        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
          Add item
        </Button>
      </Space>
    </>
  );
  return (
    <Modal
      title="Add A New Todo"
      centered
      open={open}
      onOk={() => handleAdd(false)}
      onCancel={() => handleAdd(false)}
      width={1000}
    >
      <Form
        {...formItemLayout}
        style={{
          maxWidth: 1000,
        }}
      >
        <Form.Item
          label="TodoName"
          name="TodoName"
          required
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Task"
          name="Task"
          rules={[
            {
              message: 'Please input!',
            },
          ]}
        >
          <Select />
        </Form.Item>

        <Form.Item
          label="Progress"
          name="Progress"
          rules={[
            {
              message: 'Please input!',
            },
          ]}
        >
          <Select />
        </Form.Item>

        <Form.Item
          label="Percent"
          name="Percent"
          tooltip="This is the percent of the current event in the progress
"
          rules={[
            {
              message: 'Please input!',
            },
          ]}
        >
          <ProgressDrag
            percent={percent}
            handlePercentChange={setPercent}
            type="line"
          />
        </Form.Item>

        <Form.Item
          label="Tags"
          name="Tags"
          rules={[
            {
              message: 'Please select!',
            },
          ]}
        >
          <Select
            mode="multiple"
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            options={options}
            placeholder="please select tags"
            dropdownRender={dropdownRender}
          />
        </Form.Item>
        <Form.Item
          label="Describtion"
          name="Describtion"
          rules={[
            {
              message: 'Please input!',
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: 'none',
            }}
          />
        </Form.Item>
        <Form.Item
          label="Attachment"
          name="Attachment"
          rules={[
            {
              message: 'Please input!',
            },
          ]}
        >
          <FileUpload />
        </Form.Item>
      </Form>
    </Modal>
  );
}
