import React, { MouseEventHandler, ReactNode } from "react";
import { ArrowFunction } from "typescript";
import "./styles.scss";
const ActionsPages: React.FC<{
  dataRender: Array<{ linkIcon: ReactNode; title: string , onClickItem :MouseEventHandler}>;
}> = (props) => {


  return (
    <div className="Action-Page">
      {
        props.dataRender && props.dataRender.map((item , index)=>{
          return(
            <div className="Action-Page-item" key={index} onClick={item.onClickItem}>
            <div className="Action-Page-item_img">
             {item.linkIcon}
            </div>
            <div className="Action-Page-item_title">
              <p>{item.title}</p>
            </div>
          </div>
          )
        })
      }
     
    </div>
  );
};

export default ActionsPages;
