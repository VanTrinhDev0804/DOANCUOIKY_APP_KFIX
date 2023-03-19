import React from "react";
import { Input } from "antd";
import "./styles.scss"

const SearchComponent :React.FC<{textHint? : String , width?: number}>= (props) => {
  const { Search } = Input;
  return (
    <div>
      <Search
        placeholder={`${props.textHint}`}
        // onSearch={onSearch}
        style={{
          width: props.width,
        }}
      />
    </div>
  );
};

export default SearchComponent;
