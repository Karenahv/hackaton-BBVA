import React from 'react'
import PropTypes from 'prop-types'
import {Card, Avatar} from 'antd'
import CountUp from 'react-countup'
import './TwittCards.scss'
import AppFrame from "../AppFrame/AppFrame";
import { AiFillHeart } from "react-icons/ai";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


function TwittCard({icon, color, title, number, descripcion}) {
    return (
            <Card
              bordered={false}
                bodyStyle={{padding: 10}}
              className='numberCard'
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="User Name"
                description="This is the description"
              />
            </Card>
    )
}

TwittCard.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    countUp: PropTypes.object,
}

export default TwittCard;