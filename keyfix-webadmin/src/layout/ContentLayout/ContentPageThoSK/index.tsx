import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";

import TableDefault from "../../../components/table/tbdefault";
import { useAppSelector } from "../../../redux/hooks";

import { DataTypeThoSuaKhoa, IParams } from "../../../types";

import "./styles.scss";

const ContentPageThoSK = () => {
  const history = useHistory();
  const pathname = history.location.pathname;

  const { dataThoSuaKhoa } = useAppSelector((state) => state.thoSuaKhoa);
  console.log(dataThoSuaKhoa)
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

  const columns: ColumnsType<DataTypeThoSuaKhoa> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Mã",
      dataIndex: "maTho",
      key: "maTho",
    },
    {
      title: "Họ Tên",
      dataIndex: "tenTho",
      key: "tenTho",
    },
    
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CCCD/CMND",
      dataIndex: "cccd",
      key: "cccd",
    },
    {
      title: "Ngày Sinh",
      dataIndex: "ngaySinh",
      key: "ngaySinh",
    },
    {
      title: "Số dư",
      dataIndex: "balanceAc",
      key: "balanceAc",
    },
    {
      title: "Địa chỉ",
      dataIndex: "diaChi",
      key: "diaChi",
    },

    {
      key: "loaiSC",
      title: "Tay nghề",

      dataIndex: "loaiSC",
      render: (_, { loaiSC }) => (
        <Space size="middle">
          {loaiSC.map((item, inđex) => {
            return (
              <>
                <div className="item-TN">
                  <p>{item}</p>
                </div>
              </>
            );
          })}
        </Space>
      ),
    },
    {
      key: "actionCN",
      width: "8%",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/capnhat-tho/${record.maTho}`}>Cập nhật</Link>
        </Space>
      ),
    },
  ];

  const data: DataTypeThoSuaKhoa[] = [];
  for (let i = 1; i < 20; i++) {
    data.push({
      key: i,
      id: "",
      maTho: "T001",
      tenTho: "Nguyễn Bảo Nam",
      phone: "011422121",
      cccd: "0214121154",
      ngaySinh: "19/2/1990",
      diaChi: "100 đường số 10, phường 11 , gò Vấp TPHCM",
      loaiSC: [
        "Khóa nhà",
        "Khóa xe máy",
        "Khóa xe máy",
        "Khóa xe máy",
        "Khóa xe máy",
        "Khóa xe máy",
      ],
      balanceAc: 100000,
      img :""
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách thợ sửa khóa" />

      <div className="Content-body">
        <div className="ContentPageThoSK">
          <TableDefault data={dataThoSuaKhoa} columns={columns} />
          <ActionsPages dataRender={actionsThem} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageThoSK;
