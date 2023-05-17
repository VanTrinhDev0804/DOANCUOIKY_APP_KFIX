import { Layout } from "antd";
import { collection, getDocs, query} from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import { db } from "../../firebase/cofig";
import ContentPageThoSK from "../../layout/ContentLayout/ContentPageThoSK";
import ContentcreateThoSK from "../../layout/ContentLayout/ContentPageThoSK/createThoSK";

import LayoutHeader from "../../layout/Header/LayoutHeader";
import { loadDataThoSuaKhoa } from "../../redux/slice/thoSuaKhoaSlice";
import { IParams } from "../../types";

const ThoSuaKhoaPages = () => {

  const dispatch = useDispatch()
  const fecthListThoSK =async () => {
    const q = query(collection(db, "Keyer"));
 
    const ad : any =[]
    const querySnapshot = await getDocs(q);
    
    
    querySnapshot.forEach((doc) => {
      ad.push({ id: `${doc.id}`, ...doc.data() })
    });

    dispatch(loadDataThoSuaKhoa(ad))
  } 

  useEffect(()=>{
    fecthListThoSK()
  }, [])


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
              <ContentcreateThoSK/>
            ) : (
              <div>
                <ContentPageThoSK />
              </div>
            )} 
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ThoSuaKhoaPages;
