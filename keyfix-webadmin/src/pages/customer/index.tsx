import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import ContentPageThoSK from "../../layout/ContentLayout/ContentPageThoSK";
import ContentcreateThoSK from "../../layout/ContentLayout/ContentPageThoSK/createThoSK";

import LayoutHeader from "../../layout/Header/LayoutHeader";
import { IParams } from "../../types";

const ThoSuaKhoaPages = () => {
  const { Content } = Layout;
  const { page, control, tag }: IParams = useParams();
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            {control === "createThoSK" ? (
              <ContentcreateThoSK />
            ) : control === "capnhat-tho" ? (
              ""
            ) : (
              <ContentPageThoSK />
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ThoSuaKhoaPages;
