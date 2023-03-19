import { Button } from 'antd'
import React from 'react'
import "./styles.scss"

const TabTacPhamEFooter :React.FC<{cancelEdit : Function}> = (props) => {
    const handleCancel =()=>{
        props.cancelEdit(false)
    }
  return (
    <div className='TabTacPhamEFooter'>
               <div className="btn-group">
              <Button
                type="primary"
                danger
                ghost
                className="btn-default"
                onClick={handleCancel}
              >
               Hủy
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit btn-default"
                // onClick={handelChangePassword}
              >
               Lưu
              </Button>
            </div>
    </div>
  )
}

export default TabTacPhamEFooter