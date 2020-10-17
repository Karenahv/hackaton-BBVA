import React, {useState} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import LogoSidebar from "../LogoSider/LogoSider";
import icono_dragnet from "../../assets/images/logo-dragnet.png";
import icono_bbva from "../../assets/images/logo-bbva.jpeg";
import {Link} from 'react-router-dom';
import {
    UserOutlined,
    ScheduleOutlined,
    ShopOutlined,
    ImportOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;

const AppFrame = ({children})  => {

    const [collapsed, setCollapsed] = useState(true)

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="2" icon={<UserOutlined/>}>
                        Login
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>GROVITY</Footer>
            </Layout>
        </Layout>
    )


}

export default AppFrame