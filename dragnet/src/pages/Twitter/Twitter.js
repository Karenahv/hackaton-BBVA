import React, {useEffect, useState} from 'react'
import AppFrame from "../../components/AppFrame/AppFrame";
import {Row, Col} from 'antd';
import CuadroResumen from "../../components/CuadroResumen/CuadroResumen";
import LineGraph from "../../components/LineChart/LineChart";
import {AiFillHeart, AiFillWechat, AiFillInteraction, AiFillFund} from "react-icons/ai";
import MapChart from "../../components/MapChart/MapChart";
import TwittCard from "../../components/TwittCards/TwittCards";
import './Twitter.scss'
import TagCloudComp from "../../components/TagCloud/TagCloud";
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';
import {Spin} from "antd";
import BarChart1 from "../../components/BarChart/BarChart";
import {URL_BASE} from "../../api";


const Twitter = (props) => {

    const [bestTweet, setBestTweet] = useState(null)
    const [worstTweet, setWorstTweet] = useState(null)
    const [scoreDay, setScoreDay] = useState(null)
    const [resumen, setResumen] = useState(null)
    const [flag, setFlag] = useState(true)
    const dia = useState(new Date().getDate())
    const mes = new Date().getMonth()
    const year = useState(new Date().getFullYear())
    const diaok = dia && dia[0]
    const yearok = year && year[0]


    useEffect(() => {

        async function getTweetDia(diaok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_best_tweet/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setBestTweet(json)
        }

        getTweetDia(diaok, yearok)

        async function getTweetWorstDia(diaok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_worst_tweet/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setWorstTweet(json)
        }

        getTweetWorstDia(diaok, yearok)

        async function getResumenDia(diaok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_analized_tweets/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setResumen(json)

        }

        getResumenDia(diaok, yearok)

        async function getScoreDay(diaok, mesok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_day_score/2020-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setScoreDay(json)
        }

        getScoreDay(diaok, yearok)
        setFlag(false)


    }, [diaok, yearok])
    return (
        <AppFrame>
            <h1>Fecha de Análisis Twitter : <Moment
                format="MMM DD YYYY">{moment.utc().locale('es')}</Moment></h1>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen dato={resumen && resumen[0] && resumen[0].n_tweets_analized} title='Tweets analizados' icon={<AiFillWechat/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen dato={resumen && resumen[0] && resumen[0].n_likes_prom} title='Promedio Likes' icon={<AiFillHeart/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen dato={resumen && resumen[0] && resumen[0].n_rt_prom} title='Promedio Retweet' icon={<AiFillInteraction/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen dato={scoreDay && scoreDay[0] && scoreDay[0].total_score} title='Indice de aprobación hoy' icon={<AiFillFund/>}></CuadroResumen>
                </Col>
            </Row>
            <Row>
                <Col lg={14} md={24} xs={24}>
                    <h2>Índice de aprobación última semana</h2>
                    <LineGraph></LineGraph>
                </Col>
                <Col lg={10} md={24} xs={24}>
                    <MapChart title='Número de tweets por país'></MapChart>
                </Col>
            </Row>
            {/* <Row>
                <MapChart></MapChart>
            </Row> */}
            <Row className="twitt-card-title" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <h2>Tweets Destacados</h2>
                </Col>
            </Row>
            <Row className="twitt-card-container" gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard bestTweet={bestTweet} author={bestTweet && bestTweet[0] && bestTweet[0].author}
                    full_text={bestTweet && bestTweet[0] && bestTweet[0].full_text}/>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <TwittCard bestTweet={bestTweet} author={bestTweet && bestTweet[1] && bestTweet[1].author}
                    full_text={bestTweet && bestTweet[1] && bestTweet[1].full_text}/>
                </Col>
                <Col lg={6} md={24} xs={24} id='worst'>
                    <TwittCard bestTweet={worstTweet} author={worstTweet && worstTweet[0] && worstTweet[0].author}
                    full_text={worstTweet && worstTweet[0] && worstTweet[0].full_text}/>
                </Col>
                <Col lg={6} md={24} xs={24} id='worst'>
                    <TwittCard bestTweet={worstTweet} author={worstTweet && worstTweet[1] && worstTweet[1].author}
                    full_text={worstTweet && worstTweet[1] && worstTweet[1].full_text}/>
                </Col>
            </Row>

            <Row className='row-tag-cloud'>
                <TagCloudComp></TagCloudComp>
            </Row>
            <Row id='bar-chart'>
                <BarChart1></BarChart1>
            </Row>

        </AppFrame>
    )
}

export default Twitter;