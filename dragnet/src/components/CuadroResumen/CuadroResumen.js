import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import CountUp from 'react-countup'
import './CuadroResumen.scss'
import AppFrame from "../AppFrame/AppFrame";


function NumberCard({icon, color, title, number, countUp}) {
    return (
        <AppFrame>
            <Card
                className='numberCard'
                bordered={false}
                bodyStyle={{padding: 10}}
            >
      <span className='iconWarp' style={{color}}>

      </span>
                <div className='content'>
                    <p className='title'>{title || 'No Title'}</p>
                    <p className='number'>
                        <CountUp
                            start={0}
                            end={number}
                            duration={2.75}
                            useEasing
                            useGrouping
                            separator=","
                            {...(countUp || {})}
                        />
                    </p>
                </div>
            </Card>
        </AppFrame>
    )
}

NumberCard.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    countUp: PropTypes.object,
}

export default NumberCard
