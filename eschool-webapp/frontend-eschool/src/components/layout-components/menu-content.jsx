import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import {
  UserOutlined,
  FieldTimeOutlined,
  EditOutlined,
  FundOutlined,
  ReadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import AdminConfig from '../../configs/admin-config';

const { SubMenu } = Menu;

const iconMapping = {
  UserOutlined: <UserOutlined />,
  FieldTimeOutlined: <FieldTimeOutlined />,
  EditOutlined: <EditOutlined />,
  FundOutlined: <FundOutlined />,
  ReadOutlined: <ReadOutlined />,
  SettingOutlined: <SettingOutlined />,
};

const MenuContent = ({ collapsed }) => {
  console.log('collapsed', collapsed);
  return (
    <Menu mode="inline">
      {AdminConfig.map((section) => (
        <Menu.ItemGroup
          key={section.key}
          title={!collapsed ? section.title : null}
        >
          {section.items.map((item) =>
            item.submenu ? (
              <SubMenu
                key={item.key}
                title={!collapsed ? item.title : null}
                icon={item.icon && iconMapping[item.icon.displayName]}
              >
                {item.submenu.map((subItem) => (
                  <Menu.Item
                    key={subItem.key}
                    icon={subItem.icon && iconMapping[subItem.icon.displayName]}
                  >
                    <Link to={subItem.path}>
                      <span>{subItem.title}</span>
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon && iconMapping[item.icon.displayName]}
              >
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            )
          )}
        </Menu.ItemGroup>
      ))}
    </Menu>
  );
};

MenuContent.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default MenuContent;
