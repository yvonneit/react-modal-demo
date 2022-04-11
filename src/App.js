import React, { useState } from 'react';
import ModalDetail from './modal';
import { Table, Tag, Space } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currData, setData] = useState('');

  const showModal = (record) => {
    setIsModalVisible(true);
    setData(record);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        console.log('record', record);
        return (
          <Space size="middle">
            <a onClick={() => showModal(record)}>Detail</a>
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <h1>Playground</h1>
      <p>
        点击详情，应该出现弹窗（Antd Modal）, 弹窗中应该展示当前行的姓名和地址
      </p>
      <Table bordered columns={columns} dataSource={data} />
      <ModalDetail
        visible={isModalVisible}
        closeModal={closeModal}
        data={currData}
      />
    </div>
  );
}
