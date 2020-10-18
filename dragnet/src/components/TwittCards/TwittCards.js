import React from 'react'
import PropTypes from 'prop-types'
import {Card, Avatar} from 'antd'
import './TwittCards.scss'

const { Meta } = Card;


function TwittCard({bestTweet, author, full_text}) {
    return (
            <Card
              bordered={false}
                bodyStyle={{padding: 10}}
              className='numberCardTweet'
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={author}
                description={full_text}
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