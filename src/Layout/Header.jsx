import React, { useEffect, useState } from "react";
import { Badge, Button, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
// import { getRequest } from "../api";
// import { useAuth } from "../components/Auth";
// import { useDispatch } from "react-redux";
// import { remove } from "../features/authTokenSlice";

const { Item } = Menu;
function Header() {
  const [path, setPath] = useState("/");

//   const auth = useAuth();
  const navigate = useNavigate();
//   const dispatch = useDispatch();

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const handleLogout = async () => {
    // dispatch(remove());
    // auth.logout();
    navigate("/");
  };

  return (
    <>
      <div
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
          style={{
            width: "100%",
            justifyContent: "end",
            border: "none",
          }}
          className="header"
        >
            <>
              <Item className="menuitemparent" key="/dashboard">
                <Link className="menuitem" to="/dashboard">
                  Home Page
                </Link>
              </Item>
            </>
        </Menu>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={[path]}
          selectedKeys={[path]}
          style={{
            width: "100%",
            justifyContent: "end",
            border: "none",
          }}
          className="header"
        >
            <>
              <Item className="menuitemparent" key="/dashboard">
                <Link className="menuitem" to="/dashboard">
                  Cart
                </Link>
              </Item>
            </>
        </Menu>

      </div>
    </>
  );
}

export default Header;
