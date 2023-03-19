import React from 'react'
import { Layout } from 'antd'
import SelectLangguage from '../../components/Header/selectlanguage'
import UserHeader from '../../components/Header/UserHeader'
import './styles.scss'

const {Header} = Layout
const LayoutHeader = () => {
  return (
    <Header>
      <div className="Header-App">
      <SelectLangguage/>

      <UserHeader/>
      </div>

    </Header>

  )
}

export default LayoutHeader