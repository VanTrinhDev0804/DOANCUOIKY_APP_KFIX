import { Form, Input, Button, Space } from "antd";

import { Link, useParams } from "react-router-dom";
import { IParams } from "../../types";

const FormForgotPassword = () => {
  const { page }: IParams = useParams();
  console.log(page);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      className="Formforgort_Password"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item>
        <div className="Form_login-title">
          <h3>Khôi phục mật khẩu</h3>
        </div>
      </Form.Item>

      {/* send reset email success */}

      {page === "sendlink-resetpw" ? (
        <Form.Item>
          <div className="Form_login-sendSuccess">
            <p>
              Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng
              kiểm tra mail.
            </p>
            <p>
              Click vào đường link được đính kèm trong mail để chuyển đến trang
              đặt lại mật khẩu.
            </p>
          </div>
        </Form.Item>
      ) : (
        <>
          <Form.Item>
            <div className="Form_login-subtitle">
              <span>
                Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục mật
                khẩu
              </span>
            </div>
          </Form.Item>
          <Form.Item label="Email" name="email" className="lableInput">
            <Input required />
          </Form.Item>
          <Form.Item>
            <div className="btn-group">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                <Link to={`/sendlink-resetpw`}>Xác Nhận</Link>
              </Button>
            </div>

            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </>
      )}

      <div className="btn-group">
        <Link  to={`/`}>
        <p className="Forget_password">Quay lại đăng nhập </p>
        </Link>
      </div>
    </Form>
  );
};

export default FormForgotPassword;
