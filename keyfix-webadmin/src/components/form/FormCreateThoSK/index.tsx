import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Result,
  Select,
  SelectProps,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import Item from "antd/lib/list/Item";
import { RcFile } from "antd/lib/upload";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import "./styles.scss";
import dayjs from "dayjs";
import { auth, storage } from "../../../firebase/cofig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  UpdateData,
  updateUserRTDatabase,
  writeDataFireStore,
  WriteDataGenerateID,
  writeUserRTDatabase,
} from "../../../firebase/AsyncActtions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IParams } from "../../../types";
import {
  loadDataThoSuaKhoa,
  updateThoSuaKhoa,
} from "../../../redux/slice/thoSuaKhoaSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

const dateFormat = "DD/MM/YYYY";
const FormCreateThoSK: React.FC<{ typeform?: string }> = (props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { tag }: IParams = useParams();
  
  const { dataThoSuaKhoa } = useAppSelector((state) => state.thoSuaKhoa);

  const thoUpdate = dataThoSuaKhoa.find((item) => {
    return item.maTho === `${tag}`;
  });


  const maThoDf = "T".concat(Date.now().toString());
  const generateEmail = "keyer"
    .concat(Date.now().toString())
    .concat("@gmail.com");

  const [imgText, setImgText] = useState(thoUpdate ? thoUpdate.img : "");
  const [maTho, setMaTho] = useState(thoUpdate ? thoUpdate.maTho : maThoDf);
  const [tenTho, setTenTho] = useState(thoUpdate ? thoUpdate.tenTho : "");
  const [sdt, setSdt] = useState(thoUpdate ? thoUpdate.phone : "");
  const [cccd, setCCCD] = useState(thoUpdate ? thoUpdate.cccd : "");

  const [diaChi, setDiaChi] = useState(thoUpdate ? thoUpdate.diaChi : "");
  const [ngaySinh, setNgaySinh] = useState(thoUpdate ? thoUpdate.ngaySinh : "");
  const [balanceAc, setBalanceAc] = useState(
    thoUpdate ? thoUpdate.balanceAc.toString() : ""
  );
  const [loaiSC, setLoaiSC] = useState(thoUpdate ? thoUpdate.loaiSC : []);
  const onChangeDateNS: DatePickerProps["onChange"] = (date, dateString) => {
    setNgaySinh(dateString);
  };

  // Upload ảnh
  const [fileList, setFileList] = useState<UploadFile[]>(
    thoUpdate
      ? [
          {
            uid: "",
            name: "",
            status: "done",
            url: thoUpdate ? thoUpdate.img : "",
          },
        ]
      : []
  );

  const pr: UploadProps = {
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture-card",
    beforeUpload(file) {
      const storageRef = ref(storage, `imageTho/${file.name}`);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef)
          .then((url) => {
            setImgText(url);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  };
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => {
          resolve(reader.result as string);
        };
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
    // console.log(imgText)
  };

  // handle

  const handleThem = () => {
    let key = dataThoSuaKhoa && dataThoSuaKhoa.length + 1;

    const dataUpload = {
      key: key,
      maTho: maTho,
      tenTho: tenTho,
      cccd: cccd,
      diaChi: diaChi,
      ngaySinh: ngaySinh,
      phone: sdt,
      balanceAc: parseInt(balanceAc),
      loaiSC: loaiSC,
      img: imgText,
      email: generateEmail,
      isVerify: false,
      otp: "000000",
    };

    const isEmty = Object.values(dataUpload).includes("");
    const checkMaTho = dataUpload.maTho
      ? dataThoSuaKhoa?.findIndex((item) => {
          return item.maTho === dataUpload.maTho;
        })
      : -1;

    if (isEmty) {
      alert("Phải điền đầy đủ thông tin");
    } else {
      // checkMaNV ===-1
      if (!isEmty && checkMaTho === -1) {
        const dataup = { id: "", ...dataUpload };
        createUserWithEmailAndPassword(auth, dataUpload.email, dataUpload.phone)
          .then((userCredential) => {
            const userId = userCredential.user.uid;
            const keyerCreate = { userId, ...dataUpload };
            writeDataFireStore(keyerCreate, "Keyer", userId);
            const datarealtime = {
              tenTho: tenTho,
              dinhVi: diaChi,
              phone: sdt,
              balanceAc: parseInt(balanceAc),
              loaiSC: loaiSC,
              img: imgText,
              order: "",
              status: "Offline",
            };
            writeUserRTDatabase(userId, datarealtime);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        // WriteDataGenerateID(dataUpload, "Keyer");
        dispatch(loadDataThoSuaKhoa(dataThoSuaKhoa?.concat(dataup)));
        alert("Thêm Thành Công");
        // create acount

        history.replace("/thosuakhoa");
      } else if (checkMaTho !== -1) {
        alert("Mã đã tồn tại");
      }
    }
  };
  const handelUpdateData = () => {
    
    let idUpdate = thoUpdate ? thoUpdate.id : "";
   
    const key = thoUpdate && thoUpdate.key;
    const maTho = thoUpdate && thoUpdate.maTho;
    const dataUpload = {
      id: idUpdate,
      key,
      maTho,
      tenTho: tenTho,
      cccd: cccd,
      diaChi: diaChi,
      ngaySinh: ngaySinh,
      sdt: sdt,
      balanceAc: parseInt(balanceAc),
      loaiSC: loaiSC,
      img: imgText,
    };

    const isEmty = Object.values(dataUpload).includes("");
    // const checkMaTho = dataUpload.maTho ? data?.findIndex((item)=>{
    //     return item.maNV === dataUpload.maNV
    // }): -1

    if (isEmty) {
      alert("Thông tin không được trống");
    } else {
      // checkMaNV ===-1
      if (!isEmty) {
    
        // const dataup = { ...dataUpload };
        UpdateData(dataUpload, "Keyer", idUpdate);
        dispatch(updateThoSuaKhoa(dataUpload));
        alert("UpdateSucess");
        history.replace("/thosuakhoa");
        const datarealtime = {
          tenTho: tenTho,
          dinhVi: diaChi,
          phone: sdt,
          balanceAc: parseInt(balanceAc),
          loaiSC: loaiSC,
          img: imgText,
          order: "",
          status: "Offline",
        };


      
        updateUserRTDatabase(idUpdate, datarealtime);
      }
      // else if(checkMaNV !==-1){
      //     alert("Mã nhân viên tồn tại")
      // }
    }
  };

  const options: SelectProps["options"] = [
    {
      label: "Khóa nhà",
      value: "Nhà",
    },
    {
      label: "Khóa xe máy",
      value: "Khóa oto",
    },
    {
      label: "Khóa xe 4 bánh",
      value: "Xe 4 bánh",
    },
    {
      label: "Khóa tủ, két săt",
      value: "Tủ két sắt",
    },
    {
      label: "Khóa điện thoại, laptop",
      value: "Điện thoại, Laptop",
    },
  ];

  // for (let i = 10; i < 36; i++) {
  //   options.push({
  //     label: i.toString(36) + i,
  //     value: i.toString(36) + i,
  //   });
  // }

  const handleChange = (value: string[]) => {
    setLoaiSC(value);
  };
  return (
    <div className="main-app">
      <div className="main-app_content">
        <div className="ThoSK-Profile">
          <div className="ThoSK-Profile_Avatar">
            <Upload
              {...pr}
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && "Chọn ảnh"}
            </Upload>
          </div>
          <div className="ThoSK-Profile_Form">
            <Form layout="vertical" className="ThoSK-Profile_FormLeft">
              <Form.Item
                label="Mã Thợ sửa khóa "
                name="maTho"
                initialValue={maTho}
              >
                <Input
                  type="text"
                  name="maTho"
                  onChange={(e) => setMaTho(e.target.value)}
                  disabled={true}
                />
              </Form.Item>
              <Form.Item label="Họ Tên " name="tenTho" initialValue={tenTho}>
                <Input
                  type="text"
                  name="tenTho"
                  onChange={(e) => setTenTho(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại:" name="sdt" initialValue={sdt}>
                <Input
                  type="text"
                  name="sdt"
                  onChange={(e) => setSdt(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="CCCD/CMND:" name="cccd" initialValue={cccd}>
                <Input
                  type="text"
                  name="cccd"
                  onChange={(e) => setCCCD(e.target.value)}
                />
              </Form.Item>
            </Form>

            <Form layout="vertical" className="ThoSK-Profile_FormRight">
              <Form.Item
                label="Ngày Sinh:"
                name="ngaySinh"

                // initialValue={}
              >
                {ngaySinh === "" ? (
                  <DatePicker format={dateFormat} onChange={onChangeDateNS} />
                ) : (
                  <DatePicker
                    defaultValue={dayjs(`${ngaySinh}`, dateFormat)}
                    format={dateFormat}
                    onChange={onChangeDateNS}
                  />
                )}
              </Form.Item>
              <Form.Item
                label="Địa chỉ nơi ở"
                name="diaChi"
                initialValue={diaChi}
              >
                <Input
                  type="text"
                  name="diaChi"
                  onChange={(e) => setDiaChi(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Loại sửa chữa"
                name="loaiSC"
                // initialValue={}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "425px" }}
                  defaultValue={loaiSC}
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
              <Form.Item
                label="Số dư:"
                name="balanceAc"
                initialValue={balanceAc}
              >
                <Input
                  type="text"
                  name="balanceAc"
                  onChange={(e) => setBalanceAc(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="btn-group">
        <Link to={"/thosuakhoa"}>
          <Button
            type="primary"
            danger
            ghost
            className="btn-default"
            // onClick={handleCancel}
          >
            Hủy
          </Button>
        </Link>
        {props.typeform === "update" ? (
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit btn-default"
            onClick={handelUpdateData}
          >
            Cập nhật
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit btn-default"
            onClick={handleThem}
          >
            Tạo
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormCreateThoSK;
