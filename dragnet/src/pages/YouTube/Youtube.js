import React from 'react'
import AppFrame from "../../components/AppFrame/AppFrame";
import {Row, Col} from 'antd';
import CuadroResumen from "../../components/CuadroResumen/CuadroResumen";
import LineGraph from "../../components/LineChart/LineChart";
import { AiFillHeart, AiFillWechat, AiFillFund, AiFillEye } from "react-icons/ai";
import MapChart from "../../components/MapChart/MapChart";
import TwittCard from "../../components/TwittCards/TwittCards";
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';



const YouTube = (props) => {
    return (
        <AppFrame>
            <h1>Fecha de Análisis Youtube: <Moment
                                                format="MMM DD YYYY">{moment.utc().subtract(1, 'days').locale('es')}</Moment></h1>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Comentarios analizados' icon={<AiFillWechat/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Likes' icon={<AiFillHeart/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Vistas promedio' icon={<AiFillEye/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Promedio índice de aprobación' icon={<AiFillFund/>}></CuadroResumen>
                </Col>
            </Row>
            <Row>
                <Col lg={14} md={24} xs={24}>
                    <h2>Índice de aprobación última semana</h2>
                    <LineGraph></LineGraph>
                </Col>
                 <Col lg={10} md={24} xs={24}>
                 <MapChart title='Comentarios por país'></MapChart>
                </Col>
            </Row>
            {/* <Row>
                <MapChart></MapChart>
            </Row> */}
            <Row className="twitt-card-title" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <h2>Comentarios Destacados</h2>
                </Col>
            </Row>
            <Row className="twitt-card-container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard/>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard/>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard/>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard/>
                </Col>
            </Row>

        </AppFrame>
    )
}

export default YouTube;