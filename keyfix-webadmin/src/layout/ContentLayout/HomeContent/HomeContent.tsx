import React, { useEffect, useState } from "react";
import { Avatar, Form, Input, DatePicker, Button } from "antd";
import dayjs from "dayjs";

import ModalChangePassword from "../../../components/modal/modalchangepassword";
import "./styles.scss";
import ContentTitle from "../../../components/common/Content/contentTitle";
import ActionsPages from "../../../components/actionpages/ActionPages";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addcurrentAdmin,
  loadAdminSuccess,
} from "../../../redux/slice/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/cofig";
import { useHistory } from "react-router-dom";
const dateFormat = "DD/MM/YYYY";

const HomeContent = () => {
  const [openChangePw, setOpenChangePass] = useState(false);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { currentAdmin } = useAppSelector((state) => state.admin);

  const handelModalOpen = () => {
    setOpenChangePass(true);
  };
  const handelCancelModal = () => {
    setOpenChangePass(false);
  };

  const handelDangSuat = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(addcurrentAdmin({}));
    dispatch(loadAdminSuccess(false));
  };

  const actionsHomePage = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_lock.png")}
          width={32}
        />
      ),
      title: "Đổi mật khẩu",
      onClickItem: handelModalOpen,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_log-out.png")}
          width={32}
        />
      ),
      title: "Đăng xuất",
      onClickItem: handelDangSuat,
    },
  ];

  const renderPage = currentAdmin.map((item, index) => {
    const ho = item.name?.slice(0, item.name?.indexOf(" "));
    const ten = item.name?.slice(item.name?.lastIndexOf(" ") + 1);
    return (
      <div className="Content-App">
        <ContentTitle title="Thông tin cơ bản" />
        <div className="Content-body">
          <div className="Content-bodyLeft">
            <div className="Content-body_avatar">
              <Avatar size={240} icon={<img src={item.avatar} />} />
              <Avatar
                className="Icon-Camera"
                size={40}
                icon={
                  <img src={require("../../../assets/image/Cameraicon.png")} />
                }
              />
            </div>
            <div className="Content-body_nameuser">
              <p>{item.name}</p>
            </div>
          </div>
          <div className="Content-bodyRight">
            <div className="Form-UserInfo_Top">
              <Form layout="vertical" className="Users-Profile_FormLeft">
                <Form.Item label="Họ :" name="FirstName" initialValue={ho}>
                  <Input type="text" name="FirstName" />
                </Form.Item>
                <Form.Item
                  label="Ngày Sinh:"
                  name="NgaySinh"
                  // initialValue={'Tuyết'}
                >
                  <DatePicker
                    defaultValue={dayjs(item.ngaySinh, dateFormat)}
                    format={dateFormat}
                  />
                </Form.Item>
              </Form>
              <Form layout="vertical" className="Users-Profile_FormRight">
                <Form.Item label="Tên:" name="LastName" initialValue={ten}>
                  <Input type="text" name="LastName" />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại:"
                  name="Phone"
                  initialValue={`${item.phone}`}
                >
                  <Input type="text" name="Phone" defaultValue={item.phone} />
                </Form.Item>
              </Form>
            </div>
            <div className="Form-UserInfo_Bottpm">
              <Form layout="vertical" className="Users-Profile_FormBottom">
                <Form.Item
                  label="Email:"
                  name="Email"
                  initialValue={item.email}
                >
                  <Input type="text" name="Email" disabled />
                </Form.Item>
                <Form.Item
                  label="Tên đăng nhập:"
                  name="Username"
                  initialValue={item.email}
                >
                  <Input type="text" name="Username" disabled />
                </Form.Item>

                <Form.Item
                  label="Phân quyền:"
                  name="role"
                  initialValue={item.role}
                >
                  <Input type="text" name="role" disabled />
                </Form.Item>
                {/* <Form.Item>
          <div className="btn-group">
            <Button type="primary" danger ghost className="btn-default">
              Hủy
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-submit btn-default"
          
            >
              Lưu
            </Button>
          </div>
        </Form.Item> */}
              </Form>
            </div>
          </div>

          <ActionsPages dataRender={actionsHomePage} />

          {/* <HomePageAction setOpenModal={handelModalOpen} /> */}
        </div>
        <ModalChangePassword
          isOpenModal={openChangePw}
          isCancel={handelCancelModal}
        />
      </div>
    );
  });

  return <>{renderPage}</>;
};

export default HomeContent;
