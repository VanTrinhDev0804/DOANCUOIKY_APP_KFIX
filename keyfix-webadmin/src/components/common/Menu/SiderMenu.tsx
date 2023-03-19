/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import type { MenuProps } from "antd";
import "./styles.scss";
import { Link, useHistory, useParams } from "react-router-dom";
import { FileTextOutlined, LockOutlined } from "@ant-design/icons";
import {
  ContactsOutlined,
  CustomerServiceOutlined,
  FundFilled,
  SettingOutlined,
} from "@ant-design/icons/lib/icons";
import { IParams } from "../../../types";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,

  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <>
      <div className="menu-item">
        {/* <img src={require("../../../assets/image/action-icon/fi_lock.png")} /> */}
        <LockOutlined style={{ fontSize: "32px", marginBottom: 5 }} />
        <span>Thợ sửa khóa</span>
      </div>
    </>,
    "/thosuakhoa"
  ),
  //play list
  getItem(
    <>
      <div className="menu-item">
        <FileTextOutlined style={{ fontSize: "32px", marginBottom: 5 }} />
        <span>Đơn hàng</span>
      </div>
    </>,
    "/donhang"
  ),
  //lap lich phat
  getItem(
    <>
      <div className="menu-item">
        <ContactsOutlined style={{ fontSize: "32px", marginBottom: 5 }} />
        <span>Khách hàng</span>
      </div>
    </>,
    "/customer"
  ),
  // getItem(
  //   <>
  //     <div className="menu-item">
  //       <img src={require("../../../assets/image/menu-icon/hopdongicon.png")} />

  //       <span>Quản lý</span>
  //     </div>
  //   </>,
  //   "/quanly",
  //   [
  //     getItem("Quản lý hợp đồng", "/quanly/ql-hopdong"),
  //     getItem("Quản lý thiết bị", "/quanly/ql-thietbi"),
  //     getItem("Đơn vị ủy quyền", "/quanly/donviuyquyen"),
  //     getItem("Đơn vị sử dụng", "/quanly/donvisudung"),
  //   ]
  // ),
  getItem(
    <>
      <div className="menu-item">
        <FundFilled style={{ fontSize: "32px", marginBottom: 5 }} />

        <span>Báo cáo</span>
      </div>
    </>,
    "/baocao"
    // [
    //   getItem("Báo cáo doanh thu", "/doanhthu/baocaodt"),
    //   getItem("Lịch sử đổi soát", "/doanhthu/lichsu-doisoat"),
    //   getItem("Phân phối doanh thu", "/doanhthu/phanphoidt"),
    // ]
  ),
  getItem(
    <>
      <div className="menu-item">
        <SettingOutlined style={{ fontSize: "32px", marginBottom: 5 }} />
        <span>Cài đặt</span>
      </div>
    </>,
    "/setting"
    // [
    //   getItem("Phân quyền người dùng", "/setting/phanquyen-user"),
    //   getItem("Cấu hình", "/setting/cauhinh"),
    //   getItem("Quản lý hợp đồng", "/setting/ql_hopdong"),
    //   getItem("Thông tin tác phẩm", "/setting/thongtin_tacpham"),
    //   getItem("Chu kỳ đổi soát", "/setting/chuky_doisoat"),
    // ]
  ),

  //Hỗ Trợ
  getItem(
    <>
      <div className="menu-item">
        <CustomerServiceOutlined
          style={{ fontSize: "32px", marginBottom: 5 }}
        />

        <div className="menu-item-title">Hổ trợ</div>
      </div>
    </>,
    "/support",
    [
      getItem("Hướng dẫn sử dụng", "/support/HDSD"),
      // getItem("Tải app", "/dowload-app"),
      // getItem("Feedback", "/feedback"),
    ]
  ),

  // getItem("Navigation Three", "sub4", [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Option 11", "11"),
  //   getItem("Option 12", "12"),
  // ]),
];

const SiderMenu = () => {
  const { page }: IParams = useParams();

  const history = useHistory();
  const onClickItem: MenuProps["onClick"] = (e) => {
    history.push(e.key);
  };

  return (
    <Sider trigger={null} collapsible>
      <Link to={"/home"}>
      <div className="logo">
        <Avatar
          size={96}
          icon={<img src={require("../../../assets/image/logo.png")} />}
        />
      </div>
      </Link>
      <Menu
        onClick={onClickItem}
        selectedKeys={[`/${page}`]}
        style={{
          width: 170,
          height: 1080,
          backgroundColor: "#020220",
          color: "#ffff",
        }}
        mode="vertical"
        items={items}
      />
    </Sider>
  );
};

export default SiderMenu;
