import React, { useEffect, useState } from "react";
import { Badge, Button, Menu, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Item } = Menu;
function Header() {
  const [path, setPath] = useState("/");
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("click ", e);
    setMenu(e.key);
  };

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const handleLogout = async () => {
    navigate("/");
  };

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          padding: "10px",
          width: "100%",
          borderBottom: "1px solid lightgrey",
        }}
        className="header"
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[path]}
          selectedKeys={[path]}
        //   style={{
        //     width: "100%",
        //     justifyContent: "end",
        //     border: "none",
        //   }}
          className="header"
        >
              <Item className="menuitemparent" key="/homepage">
                <Link className="menuitem" to="/homepage">
                  Home Page
                </Link>
              </Item>
        </Menu>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={[path]}
          selectedKeys={[path]}
        //   style={{
        //     width: "100%",
        //     justifyContent: "end",
        //     border: "none",
        //   }}
          className="header"
        >
              <Item className="menuitemparent" key="/cart">
                <Link className="menuitem" to="/cart">
                  Cart
                </Link>
              </Item>
        </Menu>

      </div> */}
      <Row
        // gutter={24}
        type="flex"
        justify="middle"
        align="space-between"
        style={{
          backgroundColor: "#ffffff",
          alignItems: "center",
          width: "100%",
          height: "80px",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <Col
          style={{
            paddingLeft: "40px",
            backgroundColor: "#ffffff",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <Link className="menuitem" to="/homepage">
            GROCERY
          </Link>
        </Col>
        {/* <Col
          className="app_menu_wrapper"
          style={{
            height: "full",
            fontSize: "16px",
          }}
        >
          <Menu mode="horizontal" onClick={handleClick} selectedKeys={[menu]}>
            <Menu.Item key="homepage">
              <Link to="/homepage">Home</Link>
            </Menu.Item>
            <Menu.Item key="todo">
              <Link to="/todo">My ToDo</Link>
            </Menu.Item>
            <Menu.Item key="cart">
              <Link to="/cart">Cart</Link>
            </Menu.Item>
          </Menu>
        </Col> */}
      </Row>
    </>
  );
}

export default Header;