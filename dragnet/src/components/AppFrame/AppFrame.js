import React, {useState} from "react";
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import LogoSidebar from "../LogoSider/LogoSider";
import icono_bbva from "../../assets/images/Logo-BBVA (1).png";
import {Link} from 'react-router-dom';
import {URL_BASE} from "../../api";
import {
    TwitterOutlined,
    YoutubeOutlined,
} from '@ant-design/icons';
import './AppFrame.scss';
import logoDragnet from "../../assets/Artboard-oscuro.png"

const {Header, Content, Footer, Sider} = Layout;

const AppFrame = ({children}) => {

    const [collapsed, setCollapsed] = useState(true)

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<Link to={'/'}><LogoSidebar logo={icono_bbva}/></Link>}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TwitterOutlined/>}>
                        Twitter
                        <Link to="/twitter"/>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<YoutubeOutlined/>}>
                        Youtube
                        <Link to="/youtube"/>
                    </Menu.Item>
                    {/*<Menu.Item key="2" icon={<RedditOutlined/>}>*/}
                    {/*    Reddit*/}
                    {/*</Menu.Item>*/}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    <Row className='top-bar' style={{color:'white'}}>
                        <Col>
                            <h3 style={{color:'white'}}>Social Listening</h3>
                        </Col>
                    </Row>
                </Header>

                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Powered by <img alt='dragnet' className="logo-dragnet" src={logoDragnet}/>
                </Footer>
            </Layout>
        </Layout>
    )


}

export default AppFrame