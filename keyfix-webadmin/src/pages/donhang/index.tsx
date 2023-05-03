import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import ContentPageDonHang from "../../layout/ContentLayout/ContentPageDonHang";
import ContentPageThoSK from "../../layout/ContentLayout/ContentPageThoSK";
import ContentcreateThoSK from "../../layout/ContentLayout/ContentPageThoSK/createThoSK";

import LayoutHeader from "../../layout/Header/LayoutHeader";
import { IParams } from "../../types";
import OrderDetail from "../../layout/ContentLayout/ContentPageDonHang/chiTietDon";

const DonHangPages = () => {
  const { Content } = Layout;
  const { page, control, tag }: IParams = useParams();
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            { control === "chitietdonhang" ? <OrderDetail/>: <ContentPageDonHang/>}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DonHangPages;
