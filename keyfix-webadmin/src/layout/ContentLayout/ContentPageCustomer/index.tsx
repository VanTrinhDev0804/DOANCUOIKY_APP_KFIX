import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";

import ContentTitle from "../../../components/common/Content/contentTitle";

import TableDefault from "../../../components/table/tbdefault";

import { IParams } from "../../../types";

import "./styles.scss";

const ContentPageCustomer = () => {
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
    maTho: string;
    hoTen: string;
    sdt: string;
    cccd: string;
    ngaySinh: string;
    diaChi: string;
    loaiSC: Array<string>;
    balanceAC: number;
  }

  const columns: ColumnsType<DataType> = [
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
      dataIndex: "hoTen",
      key: "hoTen",
    },

    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt",
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
      dataIndex: "balanceAC",
      key: "balanceAC",
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

  const data: DataType[] = [];
  for (let i = 1; i < 20; i++) {
    data.push({
      key: i,
      maTho: "T001",
      hoTen: "Nguyễn Bảo Nam",
      sdt: "011422121",
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
      balanceAC: 100000,
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách người dùng" />

      <div className="Content-body">
        <div className="ContentPageThoSK">
          {/* <TableDefault data={data} columns={columns} />
          <ActionsPages dataRender={actionsThem} /> */}
        </div>
      </div>
    </div>
  );
};

export default ContentPageCustomer;
