import React from 'react'
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import './styles.scss'


const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadFile = () => {
  return (
    <Upload{...props}>
    <Button className='btn-upload' icon={<img src={require("../../../assets/image/action-icon/upload.png")}/>}>Tải lên</Button>
  </Upload>
  )
}

export default UploadFile