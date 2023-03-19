import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import HomeContent from "../../layout/ContentLayout/HomeContent/HomeContent";

const { Header, Footer, Content } = Layout;

const HomePage = () => {
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>
            <HomeContent />
          </Content>
        </Layout>
   
      </Layout>
      
    </div>
  );
};

export default HomePage;
