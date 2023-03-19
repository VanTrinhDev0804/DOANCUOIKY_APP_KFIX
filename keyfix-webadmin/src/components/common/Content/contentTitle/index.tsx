import React from "react";
import BreadCumbLink from "../Breadcumb";
import './styles.scss'

const ContentTitle :React.FC<{title : string , breadcumb? : boolean }> = (props) => {
  return (
    <div className="Content-title">
      <BreadCumbLink/>
      <h3>{props.title}</h3>
    </div>
  );
};

export default ContentTitle;
