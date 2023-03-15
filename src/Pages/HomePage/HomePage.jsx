import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Layout from "../../Layout/index";
import { Card, Typography, Image} from "antd";
import { groceryData } from "./data";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Text } = Typography;

function HomePage() {
  const [data, setArray] = useState([]);
  // console.log(data)
  const parentToChild = (newValue) => {
    console.log(newValue)
    setArray((array) => [...array, newValue]);
    
  }
  return (
    <>
      <Layout>
        <Row style={{ marginTop: "2em" }} justify="center" gutter={32}>
          {groceryData.map((groce) => (
            <Col span={6}>
              <Card hoverable style={{ marginTop: "2em" }}>
                <Image alt="example" src={groce.image} preview={false} style={{ height: "200px", width:"auto"}}/>
                <Meta title={groce.title} description={groce.description} />
                <Text>Price {groce.price}</Text>
                <Button onClick={() => parentToChild(groce)}>Add Iteam</Button>
                
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/cart" state={{ data: data }} className="link">
                  Apple
        </Link>
      </Layout>
    </>
  );
}

export default HomePage;
