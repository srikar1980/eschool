// import { useState } from 'react';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// import { Button, Space, Layout } from 'antd';
// import MenuContent from '../../components/layout-components/menu-content';
// import Logo from '../../components/layout-components/Logo';
// import '../../App.scss';
// import AvatarDropdown from '../../components/layout-components/AvatarDropdown';
// import AppViews from '../../views/app-views';

// const { Header, Sider, Content } = Layout;

// const AppLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <Layout className="App">
//       <Layout>
//         <Sider trigger={null} width={270} collapsible collapsed={collapsed}>
//           <Logo />
//           <MenuContent collapsed={collapsed} />
//         </Sider>
//         <Layout className="app-layout">
//           <Header
//             className="site-layout-background custom-header"
//             style={{ padding: 0 }}
//           >
//             <Button
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={() => setCollapsed(!collapsed)}
//               className="trigger"
//             />
//             <Space size={16} wrap className="avatar-space">
//               <AvatarDropdown />
//             </Space>
//           </Header>
//           <Content>
//             <AppViews />
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };

// export default AppLayout;

import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Space, Layout, Dropdown, Menu } from 'antd';
import MenuContent from '../../components/layout-components/menu-content';
import Logo from '../../components/layout-components/Logo';
import '../../App.scss';
import AvatarDropdown from '../../components/layout-components/AvatarDropdown';
import AppViews from '../../views/app-views';

const { Header, Sider, Content } = Layout;

const languageOptions = [
  {
    langName: "English",
    langId: "en",
    icon: "us",
    flag: "https://flagsapi.com/BE/flat/64.png",
    lang: "En"
  },
  {
    langName: "Chinese",
    langId: "zh",
    icon: "cn",
    flag: "https://www.countryflags.io/cn/flat/32.png",
    lang: "Ch"
  },
  {
    langName: "French",
    langId: "fr",
    icon: "fr",
    flag: "https://www.countryflags.io/fr/flat/32.png",
    lang: "Fr"
  },
  {
    langName: "Japanese",
    langId: "ja",
    icon: "jp",
    flag: "https://www.countryflags.io/jp/flat/32.png",
    lang: "Jp"
  }
];

const languageMenu = (
  <Menu>
    {languageOptions.map(lang => (
      <Menu.Item key={lang.langId}>
        <img
          src={lang.flag}
          alt={lang.langName}
          style={{ width: 20, height: 15, marginRight: 8 }}
        />
        {lang.langName}
      </Menu.Item>
    ))}
  </Menu>
);

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="App">
      <Layout>
        <Sider trigger={null} width={270} collapsible collapsed={collapsed}>
          <Logo />
          <MenuContent collapsed={collapsed} />
        </Sider>
        <Layout className="app-layout">
          <Header className="site-layout-background custom-header" style={{ padding: 0 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="trigger"
            />
            <Space size={16} wrap className="header-space">
              <Dropdown overlay={languageMenu} trigger={['click']}>
                <Button>
                  Language <DownOutlined />
                </Button>
              </Dropdown>
              <AvatarDropdown />
            </Space>
          </Header>
          <Content>
            <AppViews />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

