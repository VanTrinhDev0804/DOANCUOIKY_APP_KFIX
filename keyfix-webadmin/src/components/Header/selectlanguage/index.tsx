/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Select, Avatar } from 'antd'
import './styles.scss'

const SelectLangguage = () => {
  return (
    <Select
    defaultValue={`Tiếng Việt`}
    style={{ width: 145 }}
    // onChange={handleChange}
    options={[
      {
        value: "Tiếng Việt",
        label: (
          <>
            <div className="item_select">
             <span className="it_title">Tiếng Việt</span> 
              <Avatar size="small" icon={<img src={require('../../../assets/image/vietnam.png')} />} />
            </div>
          </>
        ),
      },
    ]}
  />
  )
}

export default SelectLangguage