import React from 'react'
import PropTypes from 'prop-types'
import {Card} from 'antd'
import './CuadroResumen.scss'
import {IconContext} from 'react-icons'



function CuadroResumen({dato, title, icon, color}) {
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
                        {dato}
                    </p>
                </div>
            </Card>
    )
}

CuadroResumen.propTypes = {
    title: PropTypes.string,
    dato: PropTypes.number,
}

export default CuadroResumen
