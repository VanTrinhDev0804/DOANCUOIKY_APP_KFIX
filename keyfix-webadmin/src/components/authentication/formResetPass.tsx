import { Form, Input, Button, Space } from "antd";

import { Link } from "react-router-dom";

const FormResetPassword = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      className="FormReset_Password"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item>
        <div className="Form_login-title">
          <h3>Đặt lại mật khẩu</h3>
        </div>
      </Form.Item>

      <Form.Item label="Mật khẩu " name="password" className="lableInput ">
        <Input type="password" required />
      </Form.Item>
      <Form.Item
        label="Nhập lại mật khẩu "
        name="confirm_password"
        className="lableInput"
      >
        <Input type="password" required />
      </Form.Item>
      <Form.Item>
        <div className="btn-group">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Lưu mật khẩu
          </Button>
        </div>

        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default FormResetPassword;
