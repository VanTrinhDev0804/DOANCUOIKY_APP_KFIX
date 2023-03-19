import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";


import TableDefault from "../../../components/table/tbdefault";

import { IParams } from "../../../types";

import "./styles.scss";

const ContentPageDonHang = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { tag, id }: IParams = useParams();

  const keyPath = id?.slice(0, id.indexOf("_"));
  const tenbh = id?.slice(id.indexOf("_") + 1);

  const handleCreateTho = () => {
    history.replace(`${pathname}/createThoSK`);
  };

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
      key: "actionCN",
      width:'8%',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiet_donhang/${record.key}`}>Chi tiết</Link>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 20; i++) {
    data.push({
      key: i,
      maDon: 'DH001',
      tenKH: 'Nguyễn Thùy Trâm',
      tenTho:'Nguyễn Bảo Nam',
      ngayTao:'09:58 -19/12/2022',
      hoanThanh: '10:58 -19/12/2022',
      dinhVi: 'Gò vấp',
      donGia: 55000 
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách đơn hàng trong tháng" />

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
