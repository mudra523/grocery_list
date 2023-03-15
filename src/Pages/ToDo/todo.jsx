import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Space,
  Table,
  Tag,
  Tooltip,
  Row,
  Col,
  Modal,
  Form,
  Button,
  Input,
  Card,
  Select,
  Typography,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Layout from "../../Layout/index";
const { Text } = Typography;

const listData = [
  {
    iteam: 1,
    name: "Oil",
    quantity: "5 lbs",
    price: 2,
    note: "Vegitable oil",
    tag: "Low",
  },
  {
    iteam: 2,
    name: "Milk",
    quantity: "4 lbs",
    price: 2,
    note: "Vegitable oil",
    tag: "High",
  },
  {
    iteam: 3,
    name: "Butter",
    quantity: "",
    price: 2,
    note: "Vegitable oil",
    tag: "High",
  },
  {
    iteam: 4,
    name: "Cheese",
    quantity: "",
    price: 3,
    note: "Vegitable oil",
    tag: [],
  },
  {
    iteam: 5,
    name: "Egg",
    quantity: "",
    price: 10,
    note: "",
    tag: [],
  },
];
function HomePage() {
  const formRef = useRef(null);
  const [data, setData] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    const url = "http://localhost:3000/api/grocery";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("json", json.data);
        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleCancel = () => setIsModalVisible(false);
  const onFinish = (values) => {
    console.log("values", values);
    let data = new FormData();
    console.log("data", data);
    setIsModalVisible(false);
    formRef.current.resetFields();
  };

  const editeModaleData = (values) => {
    console.log("values", values);
    let data = new FormData();
    console.log("data", data);
    setIsModalVisible(true);
  };
  const setIsModalOpen = () => {
    setIsModalVisible(true);
  };
  const onDeleteIteam = (value) => {
    console.log("value", value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const columns = [
    {
      title: "Iteam Index",
      dataIndex: "iteam",
      key: "iteam",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <Text>${text}</Text>,
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (action, data) => (
        <Space size="middle">
          <Tooltip title="Edit Iteam">
            <EditOutlined onClick={() => editeModaleData(data)} />
          </Tooltip>
          <Tooltip title="Delete Iteam">
            <DeleteOutlined onClick={() => onDeleteIteam(data)} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Layout>
        <Row style={{ marginTop: "2em" }} justify="center" gutter={32}>
          <Col span={18}>
            <Button
              style={{ margin: "10px 10px", display: "flex" }}
              size="large"
              onClick={() => setIsModalOpen(data)}
            >
              Add Data
            </Button>
          </Col>
          <Col span={18}>
            <Table columns={columns} dataSource={listData} />
          </Col>
        </Row>
        <Modal
          title="Assign Twilio Number"
          open={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <Form
            layout="vertical"
            name="basic"
            ref={formRef}
            initialValues={{
              remember: true,
              name: data?.name,
              quantity: data?.quantity,
              price: data?.price,
              note: data?.note,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={[24, 0]}>
              <Col xs={24}>
                <Card style={{ padding: "1.0em" }}>
                  <Form.Item
                    label="Grocery Name"
                    name="name"
                    style={{ marginBottom: "12px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter Grocery Name.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Grocery Name" />
                  </Form.Item>
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    style={{ marginBottom: "12px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter Quantity.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Quantity" />
                  </Form.Item>
                  <Form.Item
                    label="Price"
                    name="price"
                    style={{ marginBottom: "12px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter Price.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Price" />
                  </Form.Item>
                  <Form.Item
                    label="Add Note"
                    name="note"
                    style={{ marginBottom: "12px" }}
                  >
                    <Input placeholder="Add Note" />
                  </Form.Item>
                  <Form.Item style={{ marginTop: "2em" }}>
                    <div style={{ display: "flex", float: "right" }}>
                      <Button
                        type="link"
                        style={{ margin: "0px 10px" }}
                        size="large"
                      >
                        Cancel
                      </Button>
                      <Button type="primary" htmlType="submit" size="large">
                        Submit
                      </Button>
                    </div>
                  </Form.Item>
                </Card>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Layout>
    </>
  );
}

export default HomePage;
