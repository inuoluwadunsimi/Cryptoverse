import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from 'antd/icons'
import icon from '../images/cryptocurrency.png'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon}  size="large"/>
            <Typography.Title level={2} className="logo">
                   <Link to="/">CryptoVerse</Link>
                
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
                
        </div>


    </div>
  )
}

export default Navbar