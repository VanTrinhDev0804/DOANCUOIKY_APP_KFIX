import React, { useState } from "react";
import { Button, Modal, Form, Input , message } from "antd";
import "./styles.scss";


const ModalChangePassword: React.FC<{
  isOpenModal: boolean;
  isCancel: Function;
}> = (props) => {
 
  const handleCancel = () => {
    props.isCancel(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const successChangepassword = () => {
    messageApi.open({
      type: "success",
      content: "Đổi mật khẩu thành công!",
      className: "message-changepw_success",
    });
  };
const handelChangePassword =()=>{
  handleCancel()
  successChangepassword();
  
}

  return (

    <>
    {contextHolder}
      <Modal
      
        open={props.isOpenModal}
        onCancel={handleCancel}
        footer={false}
      >
          <div className="ModalChangePW_Title">
             <h3> Thay đổi mật khẩu</h3>
          </div>
        <Form layout="vertical" className="Form_ChangePassword">
          <Form.Item
            label="Mật khẩu hiện tại:"
            name="Password"
            initialValue={"Trinh@123"}
          >
            <Input type="password" name="Password" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu mới:"
            name="Username"
            initialValue={"Trinh@123"}
          >
            <Input type="password" name="Username" />
          </Form.Item>

          <Form.Item
            label="Nhập lại mật khẩu mới:"
            name="role"
            initialValue={"Trinh@123"}
          >
            <Input type="password" name="role" itemScope />
          </Form.Item>
          <Form.Item>
            <div className="btn-group">
              <Button type="primary" danger ghost className="btn-default" onClick={handleCancel}>
                Hủy
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                onClick={handelChangePassword}
              >
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalChangePassword;
