import React, { useState } from "react";
import { Line } from "@ant-design/charts";
import ContentTitle from "../../../components/common/Content/contentTitle";
import Filter from "../../../components/control/filter";
import { Button, Col, Row, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/cofig";
import ThongKeChartColums from "../../../components/chart/ThongKeChartColums";
import CtrSelect from "../../../components/control/select";
import { loaddataThongKe } from "../../../redux/slice/thongkeSlice";
import { useAppDispatch } from "../../../redux/hooks";

interface IData {
  year: string;
  value: number;
}

const ContentPageChart = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IData[]>([]);
  const [yearThongKe, setYearThongKe] = useState("");

  let dataNamSelct: any = [];

  for (var i = 1; i < 10; i++) {
    dataNamSelct.push({
      value: 2021 + i,
      lable: `${2021 + i}`,
    });
  }

  const getDataThongKe = async (value: string) => {
    const q = query(collection(db, "ThongKe"));

    const querySnapshot = await getDocs(q);
    let data: { thang: any; doanhthu: any }[] = [];
    querySnapshot.forEach((doc) => {
      if (doc.id === value.toString()) {
        let pr = doc.data();

        for (pr.key in pr) {
          let value = {
            thang: "Tháng "+ pr.key,
            doanhthu: pr[pr.key],
          };
          data.push(value);
        }

        // if (data ) {
        //   dispatch(loaddataThongKe(data));
        // }
        // else{
        //   dispatch(loaddataThongKe(data));
        // }
      }
    });

    dispatch(loaddataThongKe(data));
  };
  const onValueSelect = (value: string) => {
    setYearThongKe(value);
    getDataThongKe(value);
  };

  return (
    <div className="Content-App">
      <div className="Content-App_Controller">
        <ContentTitle title="Thống kê doanh thu" />
        <CtrSelect
          data={dataNamSelct}
          placeholder="Chọn năm"
          title="Xem doanh thu năm"
          handleChange={onValueSelect}
        />
      </div>

      {yearThongKe !== "" ? (
        <>
          <ContentTitle title={`Doanh thu năm ${yearThongKe}`} />
          <ThongKeChartColums />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentPageChart;
