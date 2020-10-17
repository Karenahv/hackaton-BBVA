import React, {Component} from 'react';
import {Col, Row} from 'antd';
// import Welcome from '../../../pages/Welcome/Welcome';
import logoDragnet from '../../../assets/Artboard 1.png'


const WelcomeSection = () => {
    return (
        <div>
             <Row className="welcome-section" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={16} md={16} xs={8}>
                <img src={logoDragnet}/>
                <h1>Bienvenido</h1>
                <h3>Iniciar</h3>
            </Col>
        </Row>

        </div>
       
    )
}

export default WelcomeSection;