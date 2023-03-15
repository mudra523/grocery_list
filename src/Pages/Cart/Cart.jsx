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
import { CaretUpOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";
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

function Cart(props) {
  const onChange4 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const [list, setList] = useState([]);
  const [value4, setValue4] = useState('Apple');

 
  useEffect(()=>{
    const listData = location.state?.data;
    setList(listData)
  },[location.state?.data])

  console.log(location?.state?.data, " listData");
  return (
    <>
      <Layout>

        <Row>
          {list.map((list) => (
            <Col span={18}>
              <Card style={{ width: 1500 }}>
                <Row>
                  <Col span={6}>
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />

                  </Col>
                  <Col span={18}>
                    <Row>
                      <Col span={12}>
                        Name :
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Radio.Group
                          options={optionsWithDisabled}
                          onChange={onChange4}
                          value={value4}
                          optionType="button"
                          buttonStyle="solid"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        price :
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Button type="primary" danger>
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
              <Row></Row>
            </Card>
          </Col>
        </Row>

      </Layout>
    </>

  );

}
export default Cart;


