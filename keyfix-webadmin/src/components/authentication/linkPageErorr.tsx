import { Form, Input, Button, Space } from "antd";

import { Link, useParams } from "react-router-dom";
import { IParams } from "../../types";

const LinkPageError = () => {
  const { page }: IParams = useParams();
  console.log(page);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      className="PageReset_Error"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item>
        <div className="Form_login-title_error">
          <h3>Không thể kết nối !!</h3>
        </div>
      </Form.Item>
      <Form.Item>
        <div className="Form_login-subtitle">
          <span>
            Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng
            thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
          </span>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="btn-group">
          <Button
            type="primary"
            danger
            ghost
            htmlType="submit"
            className="login-form-button"
          >
            <Link to={`/sendlink-resetpw`}>Yêu cầu gửi lại link</Link>
          </Button>
        </div>

        {/* Or <a href="">register now!</a> */}
      </Form.Item>

      <div className="btn-group">
        <Link to={`/`}>
          <p className="Forget_password">Quay lại đăng nhập </p>
        </Link>
      </div>
    </Form>
  );
};

export default LinkPageError;
