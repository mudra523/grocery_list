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

// const listData = [
//   {
//     iteam: 1,
//     name: "Oil",
//     quantity: "5 lbs",
//     price: 2,
//     note: "Vegitable oil",
//     tag: "Low",
//   },
//   {
//     iteam: 2,
//     name: "Milk",
//     quantity: "4 lbs",
//     price: 2,
//     note: "Vegitable oil",
//     tag: "High",
//   },
//   {
//     iteam: 3,
//     name: "Butter",
//     quantity: "",
//     price: 2,
//     note: "Vegitable oil",
//     tag: "High",
//   },
//   {
//     iteam: 4,
//     name: "Cheese",
//     quantity: "",
//     price: 3,
//     note: "Vegitable oil",
//     tag: [],
//   },
//   {
//     iteam: 5,
//     name: "Egg",
//     quantity: "",
//     price: 10,
//     note: "",
//     tag: [],
//   },
// ];
function ToDo() {
  const formRef = useRef(null);
  const [data, setData] = useState([]);
  const [currData, setCurrData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddVisible, setaddItemVisible] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  useEffect(() => {
    const url = "http://localhost:3001/api/grocery";
    // console.log("hey")
    const fetchData = async () => {

      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log("json", json.data);
        setData(json.data);
        // console.log(data)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    
  }
  const handleAddCancle = () => {setaddItemVisible(false);
    setShowAddForm(false);
  }
  const onFinish = (values) => {
    var id = values.id
    const grocery = {
      "title": values.title,
      "description": values.description,
      "price": values.price,
      "quantity": values.quantity,
    };
    var url = "http://localhost:3001/api/grocery/" + id;
    console.log(url, grocery);
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({ grocery })
    };
    console.log(requestOptions)

    const updateData = async () => {
      try {
        console.log("inside");
        const response = await fetch(url, requestOptions);
        console.log(response);
        const json = await response.json();
        console.log('json data', json.data)
        // setData(json.data);
        setIsModalVisible(false);
      }
      catch (error) {
        console.log("error", error);
      }
    };
    updateData();
    console.log(data)
    formRef.current.resetFields();
    // post api call
  };
  const onNewSubmit = (values) => {
    var id = values.id
    var url = "http://localhost:3001/api/grocery/create";
    console.log(url);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values })
    };
    console.log(requestOptions)

    const updateData = async () => {
      try {
        console.log("inside");
        const response = await fetch(url, requestOptions);
        console.log(response);
        const json = await response.json();
        setData(json.data);
        setIsModalVisible(false);
      }
      catch (error) {
        console.log("error", error);
      }
    };
    updateData();
    formRef.current.resetFields();
    // post api call
  };


  const editeModaleData = (values) => {
    console.log("eidit called")
    setCurrData(values);
    console.log(isAddVisible,showAddForm)
    setIsModalVisible(true);
  };
  const addModaleData = (values) => {
    // console.log("values", values);

    let currData = new FormData();

    setCurrData(currData);
    // console.log("data", currData);
    setIsModalVisible(true);
    // post api call
  };

  const setIsModalOpen = () => {
    setIsModalVisible(true);
  };
  const onNewClick = (values) => {
    console.log("AddClick Called")
    let currData = new FormData();
    setCurrData(currData)
    setShowAddForm(true);
    setaddItemVisible(true);
  };

  const onDeleteIteam = (value) => {
    var id = value.id
    var url = "http://localhost:3001/api/grocery/" + id;
    const deleteData = async () => {
      try {
        console.log("inside");
        const response = await fetch(url, { method: 'DELETE' });
        console.log(response);
        const json = await response.json();
      }
      catch (error) {
        console.log("error", error);
      }
    };
    deleteData();
    console.log("value", value);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
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
      dataIndex: "description",
      key: "description",
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
              data-testid="addButton"
              style={{ margin: "10px 10px", display: "flex" }}
              size="large"
              onClick={() => onNewClick(data)}
            >
              Add Data
            </Button>
          </Col>
          <Col span={18}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
        { //Check if message failed
          (showAddForm === true) ?
            <Modal
              title="Assign grocery details"
              open={isAddVisible}
              footer={null}
              onCancel={handleAddCancle}
            >
              <Form
                layout="vertical"
                name="basic"
                ref={formRef}
                initialValues={{
                  remember: false,
                  id: currData?.id,
                  title: currData?.title,
                  quantity: currData?.quantity,
                  price: currData?.price,
                  description: currData?.description,
                }}
                onFinish={onNewSubmit}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24}>
                    <Card style={{ padding: "1.0em" }}>
                      <Form.Item
                        label="Item Name"
                        name="title"
                        // value = {currData.title}
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
                        name="description"
                        style={{ marginBottom: "12px" }}
                      >
                        <Input placeholder="Add Note" />
                      </Form.Item>
                      <Form.Item
                        label="key"
                        name="id"
                        style={{ marginBottom: "12px", display: 'none' }}
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
            :
            <Modal
              title="Assign grocery details"
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
                  id: currData?.id,
                  title: currData?.title,
                  quantity: currData?.quantity,
                  price: currData?.price,
                  description: currData?.description,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[24, 0]}>
                  <Col xs={24}>
                    <Card style={{ padding: "1.0em" }}>
                      <Form.Item
                        label="Item Name"
                        name="title"
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
                        name="description"
                        style={{ marginBottom: "12px" }}
                      >
                        <Input placeholder="Add Note" />
                      </Form.Item>
                      <Form.Item
                        label="key"
                        name="id"
                        style={{ marginBottom: "12px", display: 'none' }}
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
        }
      </Layout>
    </>
  );
}

export default ToDo;
