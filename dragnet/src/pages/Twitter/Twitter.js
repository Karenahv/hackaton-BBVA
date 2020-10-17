import React from 'react'
import AppFrame from "../../components/AppFrame/AppFrame";
import {Row, Col, Button} from 'antd';
import CuadroResumen from "../../components/CuadroResumen/CuadroResumen";


const Twitter = (props) => {
    return (
        <AppFrame>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Twitts analizados'></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Likes'></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Retwitt'></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Promedio índice de aprobación'></CuadroResumen>
                </Col>
            </Row>

        </AppFrame>
    )
}

export default Twitter