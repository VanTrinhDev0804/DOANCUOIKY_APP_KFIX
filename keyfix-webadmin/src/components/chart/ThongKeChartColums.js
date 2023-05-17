import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { useAppSelector } from "../../redux/hooks";
const ThongKeChartColums = () => {
  const { dataThongke } = useAppSelector((state) => state.thongke);
  console.log(dataThongke, "datathongke");
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const config = {
    data: dataThongke,
    height : 900,
    
    xField: "thang",
    yField: "doanhthu",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
      content: (originData) => {
        const val = formatCash(`${originData.doanhthu}`);

        return val + " vnđ";
      },
      offset: 10,
 

    },
    legend: false,
    xAxis: {

      label: {
    
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      thang: {
        alias: "Tháng",
      },
      doanhthu: {
        alias: "VND",
      },
    },
    minColumnWidth: 40,
    maxColumnWidth: 40,
  };
  return (
    <div style={{ width: 1650, height: 600 }}>
      <Column {...config} />
    </div>
  );
};

export default ThongKeChartColums;
