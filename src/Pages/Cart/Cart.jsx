import React, { useEffect } from "react";
import {
  Col,
  Row,
} from "antd";
import { Radio } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { Image } from 'antd';
import { Button } from 'antd';
import Layout from "../../Layout/index"
import { useLocation } from "react-router-dom";


function Cart(props) {
  const onChange4 = ({ target: { value } }) => {
    setValue4(value);
  };
  const location = useLocation();
  const [list, setList] = useState([]);
  const [value4, setValue4] = useState('Apple');
  const [total, setTotal] = useState();
  const optionsWithDisabled = [
    {
      label: '+',
      value: 1,
    },
    {
      label: '1',
      value: '1',
    },
    {
      label: '-',
      value: -1,
    },
  ];


  useEffect(() => {
    const listData = location.state?.data;
    var temp = 0;
    for (var i = 0; i < listData.length; i++) {

      temp = temp + (listData[i].price * listData[i].count)
    }
    setTotal(temp)
    console.log(total)
    setList(listData)
  }, [location.state?.data])

  function deleteElement(deleteItem) {
    console.log("item to be deleted", deleteItem);

    var arr = list.filter(function (list) {

      return list.id !== deleteItem.id
    })
    setList(arr)
  }
  console.log(location?.state?.data, " listData");
  return (
    <>
      <Layout>
        <Row>
          {list.map((item) => (
            <Col span={18}>
              <Card style={{ width: 1500 }}>
                <Row>
                  <Col span={6}>
                    <Image
                      width={200}
                      src={item.image}
                    />

                  </Col>
                  <Col span={18}>
                    <Row>
                      <Col span={12}>
                        {list.title}
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Radio.Group
                          options={optionsWithDisabled}
                          onChange={onChange4}
                          value={item.count}
                          optionType="button"
                          buttonStyle="solid"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        {item.price}
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Button type="primary" danger onClick={() => deleteElement(item)}>
                          Delete
                        </Button>
                      </Col>

                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={6}>
            <Card>
              <Row>
                <Col>
                  Total
                </Col>
              </Row>
              <Row>
                <Col>
                  {total}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="primary">Pay Amount</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </Layout>
    </>

  );

}
export default Cart;


