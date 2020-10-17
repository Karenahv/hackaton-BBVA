import React, {Component} from 'react';
import {Col, Row} from 'antd';
// import Welcome from '../../../pages/Welcome/Welcome';
import logoDragnet from '../../assets/Artboard 1.png'
import {Link} from 'react-router-dom';
import './WelcomeSection.scss';


const WelcomeSection = () => {
    return (
        <div className='welcome-fondo'>
            <Row styles={{height: '40%'}}>
            </Row>
             <Row className="welcome-section" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} styles={{backgroungColor: "#132743"}}>
            <Col lg={10} md={16} xs={20}>
                <img className="logo-welcome" src={logoDragnet}/>
                <h1>Bienvenido</h1>
                <Link to="/"><h3>Iniciar</h3></Link>
            </Col>
        </Row>

        </div>
       
    )
}

export default WelcomeSection;