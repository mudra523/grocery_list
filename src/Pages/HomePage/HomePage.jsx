import React from "react";
import {
  Col,
  Row,
} from "antd";
import Layout from "../../Layout/index"
import { Avatar, Card } from 'antd';
import { eventsData } from "./data";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
function homepage() {

  const homepage = eventsData.map(event => (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={event.image} />}
    >
      <Meta title={event.title} description={event.description} />
    </Card>

  ));
  return (
    <>
      <Layout>
        <Row gutter={16} push={2}>
          <Col  >
            {homepage}
          </Col>
        </Row>
      </Layout>
    </>
  )
}


export default homepage;

// export default function homepage() {
//   const homepage = eventsData.map(event => (
//               <Card
//                hoverable
//                style={{
//                  width: 240,
//                }}
//                cover={<img alt="example" src={event.image} />}
//              >
//                <Meta title={event.title} description={event.description} />
//              </Card>

//   ));

//   return <div>{homepage}</div>;
// }



