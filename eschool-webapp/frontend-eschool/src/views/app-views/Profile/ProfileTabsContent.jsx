import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import './ProfileTabsContent.scss';

const ContactTabContent = () => {
  return (
    <div className="contact-tab-content">
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <div className="contact-item">
            <MailOutlined className="contact-icon" />
            <div>
              <span className="contact-label">Email</span>
              <p className="contact-detail">kiley.brown@example.com</p>
            </div>
          </div>
          <div className="contact-item">
            <PhoneOutlined className="contact-icon" />
            <div>
              <span className="contact-label">Phone</span>
              <p className="contact-detail">+1 123 456 7890</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div className="contact-item">
            <HomeOutlined className="contact-icon" />
            <div>
              <span className="contact-label">Address 1</span>
              <p className="contact-detail">123 Main St, Springfield, IL</p>
            </div>
          </div>
          <div className="contact-item">
            <HomeOutlined className="contact-icon" />
            <div>
              <span className="contact-label">Address 2</span>
              <p className="contact-detail">456 Elm St, Shelbyville, IL</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactTabContent;
