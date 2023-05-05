import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FormCreateThoSK from "../../../components/form/FormCreateThoSK";
import { IParams } from "../../../types";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/cofig";
import { Col, Descriptions, Divider, Row } from "antd";

interface IOrderDetail {
  orderID: string;
  // Các thuộc tính khác nếu có
}

const OrderDetail = () => {
  const { control,tag }: IParams = useParams();
  
  const [orderDetail,setOrderDetail] = useState<any>({}); 
  const getOrderDetailByID = async (id: any) => {
    const q = query(collection(db, "Orders"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      
      if(doc.data().orderID === id) {
        setOrderDetail(doc.data())
      }
    });
  } 

  useEffect(() => {
    getOrderDetailByID(tag)
  },[])

  console.log(orderDetail.orderID);
  
  return (
    <div className="Content-App">
        {control === "chitietdonhang" && <ContentTitle title="Chi tiết đơn hàng" />}  
        <Divider style={{ height: '2px',backgroundColor: '#fff' }} />
      <div className="Content-body">
        <div className="contentPageThoSK">
          {orderDetail.orderID !== undefined && (
            <div>
          <table>
            <tr className="item">
              <td className="label">Mã đơn hàng:</td>
              <td className="value">{orderDetail.orderID}</td>
            </tr>
            <tr className="item">
              <td className="label">Mã thợ:</td>
              <td className="value">{orderDetail.keyer.keyerId}</td>
            </tr>
            <tr className="item">
              <td className="label">Tên thợ:</td>
              <td className="value">{orderDetail.keyer.tenTho}</td>
            </tr>
            <tr className="item">
              <td className="label">Tên khách hàng:</td>
              <td className="value">{orderDetail.userOrder.username}</td>
            </tr>
            <tr className="item">
              <td className="label">Vấn đề:</td>
              <td className="value">{orderDetail.problem}</td>
            </tr>
            <tr className="item">
              <td className="label">Địa chỉ sửa khóa</td>
              <td className="value">{orderDetail.diaChi}</td>
            </tr>
            <tr className="item">
              <td className="label">Thời gian tạo</td>
              <td className="value">{orderDetail.createAt}</td>
            </tr>
            <tr className="item">
              <td className="label">Thời gian hoàn thành</td>
              <td className="value">{orderDetail.finishedDate}</td>
            </tr>
          </table>
          <Divider style={{ height: '2px',backgroundColor: '#000' }} />
          <table>
            
            <tr className="item">
              <td className="label">Đơn giá</td>
              <td className="value">{orderDetail.price}</td>
            </tr>
            <tr className="item">
              <td className="label">Trạng thái</td>
              <td className="value">{orderDetail.status}</td>
            </tr>
            <tr className="item">
              <td className="label">Đánh giá</td>
              <td className="value">{orderDetail.vote}</td>
            </tr>
          </table></div>)}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
