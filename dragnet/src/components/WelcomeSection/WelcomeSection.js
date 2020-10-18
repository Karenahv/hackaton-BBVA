import React, {useEffect, useState} from 'react';
import {Col, Row} from 'antd';
import logoDragnet from '../../assets/Artboard 1.png'
import {Link} from 'react-router-dom';
import './WelcomeSection.scss';
import 'moment/locale/es';
import Moment from 'react-moment';
import moment from 'moment';

const URL_BASE = 'https://d811e445999a.ngrok.io'
const WelcomeSection = () => {
    const dia = useState(new Date().getDate())
    const mes = useState(new Date().getMonth())
    const year = useState(new Date().getFullYear())
    const [bestTweet, setBestTweet] = useState(null)
    const diaok = dia && dia[0]
    const mesok = mes && mes[0]
    const yearok = year && year[0]
    // console.log(<Moment
    //                                             format="MMM DD YYYY">{moment.utc(fecha).locale('es')}</Moment>)

    useEffect(() => {

        async function getResumenDia(diaok, mesok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_best_tweet/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setBestTweet(json)
        }

        getResumenDia(diaok, mesok, yearok)

    }, [diaok, mesok, yearok])
    return (
        <div className='welcome-fondo'>
            <Row styles={{height: '40%'}}>
            </Row>
            <Row className="welcome-section" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
                 styles={{backgroungColor: "#132743"}}>
                <Col lg={10} md={16} xs={20}>
                    <img alt='welcome' className="logo-welcome" src={logoDragnet}/>
                    <h1>Bienvenido</h1>
                    <Link to="/twitter"><h3>Iniciar</h3></Link>
                </Col>
            </Row>

        </div>

    )
}

export default WelcomeSection;