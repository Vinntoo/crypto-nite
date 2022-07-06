import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptonite.png';
const navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' ></Avatar>
            <Typography.Title level={2} className='logo'>
                <link to="/">Cryptonite</link>
            </Typography.Title>
            {/* <button className='menu-control-container'>

            </button> */}
            
        </div>

    </div>
  )
}

export default navbar