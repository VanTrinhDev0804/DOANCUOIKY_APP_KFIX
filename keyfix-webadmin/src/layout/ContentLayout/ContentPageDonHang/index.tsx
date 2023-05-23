import { DatePicker,Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";
import TableDefault from "../../../components/table/tbdefault";

import { IParams } from "../../../types";

import "./styles.scss";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/cofig";
import Filter from "../../../components/control/filter";
import { store } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loadDataOrders } from "../../../redux/slice/ordersSlice";
import { ordersRemainingSelector } from "../../../redux/selectors";

const ContentPageDonHang = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const orders = useSelector(ordersRemainingSelector);
  const pathname = history.location.pathname;
  const { tag, id }: IParams = useParams();

  const keyPath = id?.slice(0, id.indexOf("_"));
  const tenbh = id?.slice(id.indexOf("_") + 1);

  const handleCreateTho = () => {
    history.replace(`${pathname}/createThoSK`);
  };

  //console.log(store.getState().filter.dataFilter)
  const fecthListOrder =async () => {
    const q = query(collection(db, "Orders"));
    const ad : any =[]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      ad.push(doc.data())
    });
    dispatch(loadDataOrders(ad))
  } 

  useEffect(()=>{
    //console.log(123);
   fecthListOrder()
  }, [])

  const actionsThem = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/Add.png")}
          width={32}
          alt="Thêm thợ sửa khóa"
        />
      ),
      title: "Thêm thợ sửa khóa",
      onClickItem: handleCreateTho,
    },
  ];

  interface DataType {
    key: number;
    maDon: string;
    tenKH: string;
    tenTho: string;
    ngayTao: string;
    hoanThanh: string;
    dinhVi: string;
    donGia: number;   
    trangThai: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Mã",
      dataIndex: "maDon",
      key: "maDon",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "tenKH",
      key: "tenKH",
    },

    {
      title: "Thợ đảm nhận",
      dataIndex: "tenTho",
      key: "tenTho",
    },
    {
      title: "Ngày Tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },
    {
      title: "Hoàn thành lúc",
      dataIndex: "hoanThanh",
      key: "hoanThanh",
    },
    {
      title: "Địa điểm",
      dataIndex: "dinhVi",
      key: "dinhVi",
    },
    {
      title: "Đơn giá",
      dataIndex: "donGia",
      key: "donGia",
    },
    {
      title: "Trạng thái",
      dataIndex: "trangThai",
      key: "trangThai",
    },
    
    {
      key: "actionCN",
      width:'8%',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitietdonhang/${record.maDon}`}>Chi tiết</Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < orders.length; i++) {
    data.push({
      key: i+1,
      maDon: orders[i]['orderID'],
      tenKH: orders[i]['userOrder']['username'],
      tenTho: orders[i]['keyer']['tenTho'],
      ngayTao: orders[i]['createAt'],
      hoanThanh: orders[i]['finishedDate'],
      dinhVi: orders[i]['diaChi'],
      donGia: orders[i]['price'],
      trangThai: orders[i]['status'],
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách các đơn hàng" />
      <Filter/>
      <div className="Content-body">
        <div className="ContentPageThoSK">
          <TableDefault data={data} columns={columns} />
          {/* <ActionsPages dataRender={actionsThem} /> */}
        </div>
      </div>
    </div>
  );
};

export default ContentPageDonHang
