import React, { useEffect, useState, useRef } from "react";
import {
    Col,
    Row,
  } from "antd";
  import Layout from "../../Layout/index"

function Dashboard() {
  return (
    <>
       <Layout>
        <Row style={{ marginTop: "2em" }} justify="center">
          <Col xs={24} sm={24} md={22} lg={20} xl={20}>Submit</Col>
        </Row>
      </Layout>
    </>
  );
}

export default Dashboard;
