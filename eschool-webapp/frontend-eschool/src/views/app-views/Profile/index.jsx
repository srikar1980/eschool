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
