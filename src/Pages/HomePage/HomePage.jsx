import React from "react";
import { Button, Col, Row } from "antd";
import Layout from "../../Layout/index";
import { Avatar, Card, Typography, Image} from "antd";
import { groceryData } from "./data";

const { Meta } = Card;
const { Text } = Typography;

function homepage() {
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
                <Button>Add Iteam</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
}

export default homepage;
