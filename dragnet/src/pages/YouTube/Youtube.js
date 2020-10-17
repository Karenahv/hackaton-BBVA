const YouTube = (props) => {
    return (
        <AppFrame>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Comentarios analizados' icon={<AiFillWechat/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Likes' icon={<AiFillHeart/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Vistas promedio' icon={<AiFillInteraction/>}></CuadroResumen>
                </Col>
                <Col lg={6} md={24} xs={24}>
                    <CuadroResumen title='Promedio índice de aprobación' icon={<AiFillFund/>}></CuadroResumen>
                </Col>
            </Row>
            <Row>
                <Col lg={14} md={24} xs={24}>
                    <h2>Índice de aprobación</h2>
                    <LineGraph></LineGraph>
                </Col>
                 <Col lg={10} md={24} xs={24}>
                 <MapChart></MapChart>
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