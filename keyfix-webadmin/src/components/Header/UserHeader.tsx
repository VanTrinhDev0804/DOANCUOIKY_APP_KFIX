import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const UserHeader = () => {
  const { currentAdmin } = useAppSelector((state) => state.admin);

  const renderPage = currentAdmin.map((it, index) => {
    const nameshort = it.name
      .slice(0, 2)
      .concat(".")
      .concat(it.name.slice(it.name.lastIndexOf(" ")));
    return (
      <div className="User-header">
        <div className="User-header_avartar">
          <Avatar size={40} icon={<img src={it.avatar} alt="images" />} />
        </div>
        <div className="User-header_GroupName">
          <p className="User-header_GroupName-name">{nameshort}</p>
          <p className="User-header_GroupName-role">{it.role}</p>
        </div>
      </div>
    );
  });
  return <Link to={"/home"}>{renderPage}</Link>;
};

export default UserHeader;
