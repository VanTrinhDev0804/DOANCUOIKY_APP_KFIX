/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Interface } from "readline";

const TableDefault: React.FC<{
  columns: ColumnsType<any>;
  data: any[];
  sizeTb?: number;
}> = (props) => {
  return (
    <div className="TableDefault">
      <Table
        columns={props.columns}
        dataSource={props.data}
        pagination={{ pageSize: 13 }}
        style={{width : props.sizeTb ? props.sizeTb : '1534px' }}
      />
    </div>
  );
};

export default TableDefault;
