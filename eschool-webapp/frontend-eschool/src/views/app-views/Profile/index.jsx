// import { useState, useEffect } from 'react';
// import {
//   Tabs,
//   Card,
//   Input,
//   Button,
//   Form,
//   Avatar,
//   Row,
//   Col,
//   Upload,
//   Spin,
//   Alert,
//   Collapse,
// } from 'antd';
// import {
//   UserOutlined,
//   UploadOutlined,
//   LockOutlined,
//   FileOutlined,
//   EditOutlined,
//   SaveOutlined,
// } from '@ant-design/icons';
// import './Profile.scss';

// const { Panel } = Collapse;

// const Profile = () => {
//   const [tabPosition] = useState('left');
//   const [activeTab, setActiveTab] = useState('Personal Info');
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [adminDetails, setAdminDetails] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     photo: '',
//   });

//   useEffect(() => {
//     fetch('https://admin.kgtopg.com/get-admin-details/?email=v1@school.com')
//       .then((response) => response.json())
//       .then((data) => {
//         setAdminDetails({
//           fullName: data.user_full_name || '',
//           email: data.user_email || '',
//           phoneNumber: data.user_phone || '',
//           photo: data.user_photo || '',
//         });
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleTabChange = (key) => {
//     const tab = tabItems.find((tab) => tab.key === key);
//     if (tab) {
//       setActiveTab(tab.label);
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveChanges = () => {
//     // Handle save changes logic here
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     // Handle cancel logic here
//     setIsEditing(false);
//   };

//   const handleUpload = (info) => {
//     // Handle file upload logic here
//   };

//   const tabItems = [
//     {
//       label: 'Personal Info',
//       key: '1',
//       icon: <UserOutlined />,
//       children: (
//         <Form layout="vertical" className="personal-info-form">
//           <div className="header">
//             <Button
//               type="primary"
//               icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
//               onClick={isEditing ? handleSaveChanges : handleEditClick}
//             >
//               {isEditing ? 'Save' : 'Edit'}
//             </Button>
//           </div>
//           {loading ? (
//             <Spin />
//           ) : error ? (
//             <Alert message="Error fetching data" type="error" />
//           ) : (
//             <>
//               <div className="avatar-container">
//                 <Avatar size={100} src={adminDetails.photo} icon={<UserOutlined />} />
//                 <Upload className="upload-button" disabled={!isEditing}>
//                   <Button icon={<UploadOutlined />}>Upload</Button>
//                 </Upload>
//               </div>
//               <Form.Item>
//                 <Input
//                   placeholder="Full Name"
//                   value={adminDetails.fullName}
//                   onChange={(e) =>
//                     setAdminDetails({ ...adminDetails, fullName: e.target.value })
//                   }
//                   disabled={!isEditing}
//                 />
//               </Form.Item>
//               <Form.Item>
//                 <Input
//                   type="email"
//                   placeholder="Email"
//                   value={adminDetails.email}
//                   onChange={(e) =>
//                     setAdminDetails({ ...adminDetails, email: e.target.value })
//                   }
//                   disabled={!isEditing}
//                 />
//               </Form.Item>
//               <Form.Item>
//                 <Input
//                   placeholder="Phone Number"
//                   value={adminDetails.phoneNumber}
//                   onChange={(e) =>
//                     setAdminDetails({
//                       ...adminDetails,
//                       phoneNumber: e.target.value,
//                     })
//                   }
//                   disabled={!isEditing}
//                 />
//               </Form.Item>
//             </>
//           )}
//         </Form>
//       ),
//     },
//     {
//       label: 'Change Password',
//       key: '2',
//       icon: <LockOutlined />,
//       children: (
//         <Form layout="vertical">
//           <Form.Item>
//             <Input.Password placeholder="Enter current password" />
//           </Form.Item>
//           <Form.Item>
//             <Input.Password placeholder="Enter new password" />
//           </Form.Item>
//           <Form.Item>
//             <Input.Password placeholder="Confirm new password" />
//           </Form.Item>
//           <Form.Item style={{ textAlign: 'center' }}>
//             <div style={{ display: 'flex' }}>
//               <Button type="primary" onClick={handleSaveChanges}>
//                 Save Changes
//               </Button>
//               <Button style={{ marginLeft: '8px' }} onClick={handleCancel}>
//                 Cancel
//               </Button>
//             </div>
//           </Form.Item>
//         </Form>
//       ),
//     },
//     {
//       label: 'Certificates',
//       key: '3',
//       icon: <FileOutlined />,
//       children: (
//         <Collapse>
//           <Panel header="Resume" key="1">
//             <p>Dummy Resume (e.g., PDF or DOC)</p>
//             <Upload onChange={handleUpload}>
//               <Button icon={<UploadOutlined />}>Upload Resume</Button>
//             </Upload>
//           </Panel>
//           <Panel header="Certificate 1" key="2">
//             <p>Dummy Certificate 1 (e.g., PDF)</p>
//             <Upload onChange={handleUpload}>
//               <Button icon={<UploadOutlined />}>Upload Certificate</Button>
//             </Upload>
//           </Panel>
//           <Panel header="Certificate 2" key="3">
//             <p>Dummy Certificate 2 (e.g., PDF)</p>
//             <Upload onChange={handleUpload}>
//               <Button icon={<UploadOutlined />}>Upload Certificate</Button>
//             </Upload>
//           </Panel>
//           <Panel header="Certificate 3" key="4">
//             <p>Dummy Certificate 3 (e.g., PDF)</p>
//             <Upload onChange={handleUpload}>
//               <Button icon={<UploadOutlined />}>Upload Certificate</Button>
//             </Upload>
//           </Panel>
//         </Collapse>
//       ),
//     },
//   ];

//   return (
//     <Card title={activeTab} style={{ width: '90%',margin:'0  auto', marginTop: '150px' }}>
//       <Tabs
//         tabPosition={tabPosition}
//         items={tabItems}
//         onChange={handleTabChange}
//         className="responsive-tabs"
//       />
//     </Card>
//   );
// };

// export default Profile;

// test

import React, { useState, useEffect } from 'react';
import { Tabs, Card, Avatar, Row, Col, Spin, Alert } from 'antd';
import { UserOutlined, FileOutlined, LockOutlined } from '@ant-design/icons';
import './Profile.scss';
import ContactTabContent from './ProfileTabsContent';

const Profile = () => {
  const [tabPosition] = useState('left');
  const [activeTab, setActiveTab] = useState('Personal Info');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminDetails, setAdminDetails] = useState({
    fullName: '',
    phoneNumber: '',
    photo: '',
  });

  useEffect(() => {
    fetch('https://admin.kgtopg.com/get-admin-details/?email=v1@school.com')
      .then((response) => response.json())
      .then((data) => {
        setAdminDetails({
          fullName: data.user_full_name || '',
          phoneNumber: data.user_phone || '',
          photo: data.user_photo || '',
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleTabChange = (key) => {
    const tab = tabItems.find((tab) => tab.key === key);
    if (tab) {
      setActiveTab(tab.label);
    }
  };

  const tabItems = [
    {
      label: 'Primary Info',
      key: '1',
      icon: <UserOutlined />,
      children: <div>Primary Information</div>,
    },
    {
      label: 'Education',
      key: '2',
      icon: <LockOutlined />,
      children: <div>Education</div>,
    },
    {
      label: 'Contact',
      key: '3',
      icon: <FileOutlined />,
      children: <ContactTabContent />,
    },
  ];

  return (
    <>
      <div className="profile-header">
        <Row align="middle">
          <Col>
            <Avatar
              size={80}
              src={adminDetails.photo}
              icon={<UserOutlined />}
            />
          </Col>
          <Col>
            <div className="profile-info">
              <h2>{adminDetails.fullName}</h2>
              <p>{adminDetails.phoneNumber}</p>
            </div>
          </Col>
        </Row>
      </div>
      <Card
        title={activeTab}
        style={{ width: '90%', margin: '0 auto', marginTop: '-50px' }} // Adjusting margin for overlap
      >
        <Tabs
          tabPosition={tabPosition}
          items={tabItems}
          onChange={handleTabChange}
          className="responsive-tabs"
        />
      </Card>
    </>
  );
};

export default Profile;
