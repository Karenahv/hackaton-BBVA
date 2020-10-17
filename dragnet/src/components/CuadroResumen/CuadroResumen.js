import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import CountUp from 'react-countup'
import './CuadroResumen.scss'
import AppFrame from "../AppFrame/AppFrame";
import { AiFillHeart } from "react-icons/ai";
import {IconContext} from 'react-icons'


function CuadroResumen({icon, color, title, number, countUp}) {
    return (
            <Card
                className='numberCard'
                bordered={false}
                bodyStyle={{padding: 10}}
            >
      <span className='iconWarp' style={{color}}>
        <IconContext.Provider value={{className:"iconCards"}}>
            {icon}
        </IconContext.Provider>
      </span>
                <div className='content'>
                    <p className='title'>{title || 'No Title'}</p>
                    <p className='number'>
                        20
                    </p>
                </div>
            </Card>
    )
}

CuadroResumen.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    countUp: PropTypes.object,
}

export default CuadroResumen
