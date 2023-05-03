import React, { useState } from "react";
import { Line } from "@ant-design/charts";
import ContentTitle from "../../../components/common/Content/contentTitle";
import Filter from "../../../components/control/filter";
import { Button, Col, Row, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/cofig";
// const data = [
//   { year: "1991", value: 3 },
//   { year: "1992", value: 10 },
//   { year: "1993", value: 3.5 },
//   { year: "1994", value: 5 },
//   { year: "1995", value: 4.9 },
//   { year: "1996", value: 6 },
//   { year: "1997", value: 7 },
//   { year: "1998", value: 9 },
//   { year: "1999", value: 13 },
//   { year: "2000", value: 5 },
//   { year: "2001", value: 4.9 },
//   { year: "2002", value: 6 },
//   { year: "2003", value: 7 },
//   { year: "2004", value: 9 },
//   { year: "2005", value: 13 },
//   { year: "2006", value: 5 },
//   { year: "2007", value: 4.9 },
//   { year: "2008", value: 6 },
//   { year: "2009", value: 7 },
//   { year: "2010", value: 9 },
//   { year: "2011", value: 13 },
// ];
interface IData {
  year: string;
  value: number;
}

const ContentPageChart = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState<IData[]>([]);
  const [revenue, setRevenue] = useState(0);
  const config = {
    data,
    xField: "year",
    yField: "value",
  };

  const handleRevenue = async (date: string) => {
    const q = query(collection(db, "Orders"));
    const querySnapshot = await getDocs(q);
    let revenue = 0;
    querySnapshot.forEach((doc) => {
      if (doc.data().createAt.split(",")[1].trim() === date) {
        revenue += 1000;
      }
    });
    return revenue;
  };

//   const hadleChart = async (date: string) => {
//     const day = date.split("/")[0];
//     const month = date.split("/")[1];
//     const year = date.split("/")[2];
//     const q = query(collection(db, "Orders"));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {

//       if (
//         doc.data().createAt.split(",")[1].trim().split("/")[1] === month &&
//         doc.data().createAt.split(",")[1].trim().split("/")[2] === year
//       ) {
//         const temp = handleRevenue(doc.data().createAt.split(",")[1].trim())
//         setData([...data, { year: doc.data().createAt.split(",")[1].trim(), value: temp }]);
//       }
//     });
//   };

  const handleSetTitle = async () => {
    const date = store.getState().filter.dataFilter.date;
    const month = store.getState().filter.dataFilter.month;
    const year = store.getState().filter.dataFilter.year;
    if (date !== "") {
      setRevenue(0);
      setTitle(date);
      const data: any = [];
      const q = query(collection(db, "Orders"));
      const querySnapshot = await getDocs(q);
      let revenueTemp = 0;
      querySnapshot.forEach((doc) => {
        const dateOrder = doc.data().createAt.split(",")[1].trim();
        if (dateOrder === date) {
          const monthOrder = dateOrder.split("/")[1];
          const yearOrder = dateOrder.split("/")[2];
          setRevenue((prev) => prev + 1000);
          if (monthOrder === month && yearOrder === year) {
            setData([...data, { year: dateOrder, value: revenueTemp }]);
          }
        }
      });
    }
  };

  const handleStatistical = () => {
    handleSetTitle();
    console.log(store.getState().filter.dataFilter);
  };
  return (
    <div className="Content-App">
      <ContentTitle title="Thống kê doanh thu" />
      <Filter />
      <div style={{ marginTop: "10px" }}>
        <Button icon={<FilterOutlined />} onClick={handleStatistical}>
          Thống kê
        </Button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <h2>{`Thống kê doanh thu ${title}`} </h2>
        <h2>{revenue}</h2>

        <div style={{ marginTop: "30px" }}>
          <Line {...config} />
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "#fff", marginTop: "10px" }}
          >
            Doanh thu trong 7 ngày gần nhất
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default ContentPageChart;
