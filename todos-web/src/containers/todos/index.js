import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Row, Table, Space } from "antd";
import styled from "styled-components";

import Container from "../../components/layout/container";
import withBreadCrumb from "../../components/withBreadCrumb";

const TodoItem = () => (
  <Form.Item
    name="todoItem"
    rules={[
      {
        required: true,
        message: "Please input your todo item!",
      },
    ]}
  >
    <Input placeholder="待添加事项" />
  </Form.Item>
);

const columns = [
  {
    title: "待办事项",
    dataIndex: "item",
    key: "item",
    sorter: false,
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    filters: [
      { text: "全部", value: "all" },
      { text: "未完成", value: "not" },
      { text: "已完成", value: "yes" },
    ],
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">标记完成</Button>
        <Button type="primary" danger>
          删除
        </Button>
      </Space>
    ),
  },
];

const dataSource = [
  {
    key: "1",
    item: "洗澡",
    status: "未完成",
  },
  {
    key: "2",
    item: "做饭",
    status: "未完成",
  },
  {
    key: "3",
    item: "洗衣服",
    status: "未完成",
  },
];

@withBreadCrumb("待办事项")
@connect(state => ({}))
export default class Todos extends React.PureComponent {
  render() {
    return (
      <Container>
        <ToDoBox>
          <div>
            <Row>
              <TodoItem />
              <Button className="rbutton" onClick={this.handleLogout}>
                添加事项
              </Button>
            </Row>
            <Table columns={columns} dataSource={dataSource} />
          </div>
        </ToDoBox>
      </Container>
    );
  }
}

const ToDoBox = styled("div")`
  .rbutton {
    margin-left: 50px;
  }
`;
