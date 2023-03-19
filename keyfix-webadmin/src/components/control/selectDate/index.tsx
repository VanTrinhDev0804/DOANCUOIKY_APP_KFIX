import { DatePicker, Select } from "antd";
import React from "react";
import { ISelect } from "../../../types";
import dayjs from "dayjs";

import "./styles.scss";

const dateFormat = "MM/YYYY";
const CtrSelectDate: React.FC<{title? : string , typepicker ? : any}> = (props) => {
  return (
    <div className="Control-Select">
      {props.title ? (
        <div className="Label-Select">
          <h4>{props.title}</h4>
        </div>
      ) : (
        ""
      )}

      <DatePicker
        defaultValue={dayjs("02/1989", dateFormat)}
        format={dateFormat}
        picker ={props.typepicker ? props.typepicker : "date"}
      />
    </div>
  );
};

export default CtrSelectDate;
