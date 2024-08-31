import { Card, Avatar, Row, Col, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/charts';

const teacherData = [
  {
    subject_sub_id: 57,
    subject_sub_name: 'SOCIAL SCIENCE',
    classroom_section: 'A',
    staff_id: 493,
    staff_name: 'Social Teacher',
    staff_photo:
      'https://firebasestorage.googleapis.com/v0/b/classess-501e6.appspot.com/o/images%2Fteacher%20image.webp?alt=media&token=6558574e-03a8-4bdc-97cf-ac792e9af05e',
    percentage: 75,
  },
  {
    subject_sub_id: 2,
    subject_sub_name: 'CHEMISTRY',
    classroom_section: 'A',
    staff_id: 492,
    staff_name: 'Science Teacher',
    staff_photo:
      'https://firebasestorage.googleapis.com/v0/b/classess-501e6.appspot.com/o/images%2Fdownload%20(2).jfif?alt=media&token=1be1957a-87c7-4fe1-bd13-5fc0de772c41',
    percentage: 95,
  },
  // Other teacher data entries...
];

const studentData = [
  {
    student_id: 1,
    student_name: 'John Doe',
    student_photo: '',
    percentage: 95,
  },
  {
    student_id: 2,
    student_name: 'Jane Smith',
    student_photo: '',
    percentage: 90,
  },
  // Other student data entries...
];

const classData = [
  {
    class_std: 'Nursery',
    details: [
      {
        class_id: 800,
        section_name: 'A',
        on_target_percentage: 30,
        below_target_percentage: 20,
        above_target_percentage: 50,
      },
      {
        class_id: 801,
        section_name: 'B',
        on_target_percentage: 25,
        below_target_percentage: 30,
        above_target_percentage: 45,
      },
    ],
  },
  {
    class_std: 'KG1',
    details: [
      {
        class_id: 802,
        section_name: 'A',
        on_target_percentage: 40,
        below_target_percentage: 20,
        above_target_percentage: 40,
      },
      {
        class_id: 803,
        section_name: 'B',
        on_target_percentage: 35,
        below_target_percentage: 25,
        above_target_percentage: 40,
      },
    ],
  },
  {
    class_std: 'KG2',
    details: [
      {
        class_id: 804,
        section_name: 'A',
        on_target_percentage: 30,
        below_target_percentage: 30,
        above_target_percentage: 40,
      },
      {
        class_id: 805,
        section_name: 'B',
        on_target_percentage: 45,
        below_target_percentage: 20,
        above_target_percentage: 35,
      },
    ],
  },
  {
    class_std: '1',
    details: [
      {
        class_id: 806,
        section_name: 'A',
        on_target_percentage: 20,
        below_target_percentage: 40,
        above_target_percentage: 40,
      },
      {
        class_id: 807,
        section_name: 'B',
        on_target_percentage: 50,
        below_target_percentage: 20,
        above_target_percentage: 30,
      },
    ],
  },
  {
    class_std: '2',
    details: [
      {
        class_id: 808,
        section_name: 'A',
        on_target_percentage: 30,
        below_target_percentage: 25,
        above_target_percentage: 45,
      },
      {
        class_id: 809,
        section_name: 'B',
        on_target_percentage: 35,
        below_target_percentage: 35,
        above_target_percentage: 30,
      },
    ],
  },
  {
    class_std: '3',
    details: [
      {
        class_id: 810,
        section_name: 'A',
        on_target_percentage: 40,
        below_target_percentage: 30,
        above_target_percentage: 30,
      },
      {
        class_id: 811,
        section_name: 'B',
        on_target_percentage: 25,
        below_target_percentage: 25,
        above_target_percentage: 50,
      },
    ],
  },
  {
    class_std: '4',
    details: [
      {
        class_id: 812,
        section_name: 'A',
        on_target_percentage: 35,
        below_target_percentage: 40,
        above_target_percentage: 25,
      },
      {
        class_id: 813,
        section_name: 'B',
        on_target_percentage: 30,
        below_target_percentage: 20,
        above_target_percentage: 50,
      },
    ],
  },
  {
    class_std: '5',
    details: [
      {
        class_id: 814,
        section_name: 'A',
        on_target_percentage: 40,
        below_target_percentage: 20,
        above_target_percentage: 40,
      },
      {
        class_id: 815,
        section_name: 'B',
        on_target_percentage: 25,
        below_target_percentage: 45,
        above_target_percentage: 30,
      },
    ],
  },
  {
    class_std: '6',
    details: [
      {
        class_id: 816,
        section_name: 'A',
        on_target_percentage: 20,
        below_target_percentage: 20,
        above_target_percentage: 60,
      },
      {
        class_id: 817,
        section_name: 'B',
        on_target_percentage: 50,
        below_target_percentage: 25,
        above_target_percentage: 25,
      },
    ],
  },
  {
    class_std: '7',
    details: [
      {
        class_id: 818,
        section_name: 'A',
        on_target_percentage: 30,
        below_target_percentage: 35,
        above_target_percentage: 35,
      },
      {
        class_id: 819,
        section_name: 'B',
        on_target_percentage: 25,
        below_target_percentage: 25,
        above_target_percentage: 50,
      },
    ],
  },
  {
    class_std: '8',
    details: [
      {
        class_id: 820,
        section_name: 'A',
        on_target_percentage: 35,
        below_target_percentage: 40,
        above_target_percentage: 25,
      },
      {
        class_id: 821,
        section_name: 'B',
        on_target_percentage: 30,
        below_target_percentage: 20,
        above_target_percentage: 50,
      },
    ],
  },
  {
    class_std: '9',
    details: [
      {
        class_id: 822,
        section_name: 'A',
        on_target_percentage: 40,
        below_target_percentage: 20,
        above_target_percentage: 40,
      },
      {
        class_id: 823,
        section_name: 'B',
        on_target_percentage: 25,
        below_target_percentage: 45,
        above_target_percentage: 30,
      },
    ],
  },
  {
    class_std: '10',
    details: [
      {
        class_id: 824,
        section_name: 'A',
        on_target_percentage: 20,
        below_target_percentage: 20,
        above_target_percentage: 60,
      },
      {
        class_id: 825,
        section_name: 'B',
        on_target_percentage: 50,
        below_target_percentage: 25,
        above_target_percentage: 25,
      },
    ],
  },
];



const Dashboard = () => {
  const pieData = [];

  classData.forEach((classItem) => {
    classItem.details.forEach((section) => {
      pieData.push({
        class: `${classItem.class_std} ${section.section_name}`,
        type: 'On Target',
        percentage: section.on_target_percentage,
      });
    });
  });

  const config = {
    data: pieData,
    angleField: 'percentage',
    colorField: 'class',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
      style: {
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Class Performance" bordered={false}>
            <Pie {...config} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} lg={12}>
          <Card title="Teacher Performers" bordered={false}>
            {teacherData.map((item) => (
              <Card
                key={item.subject_sub_id}
                style={{ marginBottom: '8px' }} // Reduced spacing
                bordered={false}
                bodyStyle={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    size={48}
                    src={item.staff_photo || <UserOutlined />}
                    icon={!item.staff_photo && <UserOutlined />}
                    alt={item.staff_name}
                    style={{ marginRight: '16px' }}
                  />
                  <div>
                    <h4 style={{ margin: 0 }}>{item.staff_name}</h4>
                    <p style={{ margin: 0 }}>{item.subject_sub_name}</p>
                  </div>
                </div>
                <Progress type="circle" percent={item.percentage} width={50} />
              </Card>
            ))}
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Best Student Performers" bordered={false}>
            {studentData.map((item) => (
              <Card
                key={item.student_id}
                style={{ marginBottom: '8px' }} // Reduced spacing
                bordered={false}
                bodyStyle={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    size={48}
                    src={item.student_photo || <UserOutlined />}
                    icon={!item.student_photo && <UserOutlined />}
                    alt={item.student_name}
                    style={{ marginRight: '16px' }}
                  />
                  <div>
                    <h4 style={{ margin: 0 }}>{item.student_name}</h4>
                  </div>
                </div>
                <Progress type="circle" percent={item.percentage} width={50} />
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
