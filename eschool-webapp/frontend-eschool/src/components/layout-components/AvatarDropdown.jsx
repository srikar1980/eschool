// import { Avatar, Dropdown, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import { APP_PREFIX_PATH } from '../../configs/app-config';

// const AvatarDropdown = () => {
//   const navigate = useNavigate();

//   const handleMenuClick = (e) => {
//     if (e.key === 'profile') {
//       navigate(`${APP_PREFIX_PATH}/profile`);
//     }
//   };

//   const profileMenu = (
//     <Menu className="profile-menu" onClick={handleMenuClick}>
//       <div className="profile-details">
//         <Avatar
//           size={64}
//           style={{ backgroundColor: '#87d068' }}
//           icon={<UserOutlined />}
//         />
//         <div className="profile-info">
//           <div className="profile-name">John Doe</div>
//           <div className="profile-role">Administrator</div>
//         </div>
//       </div>
//       <Menu.Divider />
//       <Menu.Item key="profile" className="profile-link">
//       View Profile
//       </Menu.Item>
//       <Menu.Divider />
//       <Menu.Item key="logout">Logout</Menu.Item>
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={profileMenu} placement="bottomRight" trigger={['hover']}>
//       <Avatar
//         style={{ backgroundColor: '#87d068', cursor: 'pointer' }}
//         icon={<UserOutlined />}
//       />
//     </Dropdown>
//   );
// };

// export default AvatarDropdown;

import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../configs/app-config';
import authService from '../../services/auth.service';

const AvatarDropdown = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === 'profile') {
      navigate(`${APP_PREFIX_PATH}/profile`);
    } else if (e.key === 'logout') {
      // Call the logout function and pass navigate
      authService.logout(navigate);
    }
  };

  const profileMenu = (
    <Menu className="profile-menu" onClick={handleMenuClick}>
      <div className="profile-details">
        <Avatar
          size={64}
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <div className="profile-info">
          <div className="profile-name">John Doe</div>
          <div className="profile-role">Administrator</div>
        </div>
      </div>
      <Menu.Divider />
      <Menu.Item key="profile" className="profile-link">
        View Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item> {/* Trigger the logout action */}
    </Menu>
  );

  return (
    <Dropdown overlay={profileMenu} placement="bottomRight" trigger={['hover']}>
      <Avatar
        style={{ backgroundColor: '#87d068', cursor: 'pointer' }}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default AvatarDropdown;

