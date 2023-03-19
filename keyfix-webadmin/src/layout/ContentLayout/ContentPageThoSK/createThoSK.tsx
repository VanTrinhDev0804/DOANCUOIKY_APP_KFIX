import React from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FormCreateThoSK from "../../../components/form/FormCreateThoSK";
import { IParams } from "../../../types";

const ContentcreateThoSK = () => {
  const { control }: IParams = useParams();
  return (
    <div className="Content-App">
      <ContentTitle title="Thêm thợ sửa khóa" />

      <div className="Content-body">
        <div className="ContentPageThoSK">
          {control === "capnhat-tho" ? (
            <FormCreateThoSK typeform="update"/>
          ) : (
            <FormCreateThoSK />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentcreateThoSK;
