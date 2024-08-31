import { useState } from 'react';
import {
  Table,
  Avatar,
  Rate,
  Card,
  Row,
  Col,
  Input,
  DatePicker,
  Tabs,
  Layout,
} from 'antd';
import {
  DownOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const { TabPane } = Tabs;
const { Content } = Layout;

const StudentData = [
  {
    student_id: 1494,
    student_name: 'student1',
    student_photo: '',
    total_working_days: 183,
    student_total_presenting_days: 5,
    student_admission_no: 'VS001',
    student_roll_no: 1,
    student_all_subject_percentage: 0,
    rating: 4.5,
    tests: [
      {
        test_id: 1,
        test_name: 'FA1',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 85 },
          { subject_id: 133, subject_name: 'HINDI', score: 80 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 90 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 95 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 88 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 92 },
        ],
      },
      {
        test_id: 2,
        test_name: 'FA2',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 82 },
          { subject_id: 133, subject_name: 'HINDI', score: 78 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 89 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 92 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 86 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 91 },
        ],
      },
    ],
  },
  {
    student_id: 1495,
    student_name: 'student2',
    student_photo: '',
    total_working_days: 183,
    student_total_presenting_days: 5,
    student_admission_no: 'VS002',
    student_roll_no: 2,
    student_all_subject_percentage: 0,
    rating: 3.8,
    tests: [
      {
        test_id: 1,
        test_name: 'FA1',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 70 },
          { subject_id: 133, subject_name: 'HINDI', score: 65 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 75 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 80 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 68 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 72 },
        ],
      },
      {
        test_id: 2,
        test_name: 'FA2',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 75 },
          { subject_id: 133, subject_name: 'HINDI', score: 68 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 78 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 82 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 70 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 74 },
        ],
      },
    ],
  },
  {
    student_id: 1496,
    student_name: 'student3',
    student_photo: '',
    total_working_days: 183,
    student_total_presenting_days: 5,
    student_admission_no: 'VS003',
    student_roll_no: 3,
    student_all_subject_percentage: 0,
    rating: 4.2,
    tests: [
      {
        test_id: 1,
        test_name: 'FA1',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 88 },
          { subject_id: 133, subject_name: 'HINDI', score: 85 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 92 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 94 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 89 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 90 },
        ],
      },
      {
        test_id: 2,
        test_name: 'FA2',
        subjects: [
          { subject_id: 224, subject_name: 'TELUGU', score: 86 },
          { subject_id: 133, subject_name: 'HINDI', score: 83 },
          { subject_id: 223, subject_name: 'ENGLISH', score: 90 },
          { subject_id: 108, subject_name: 'MATHEMATICS', score: 92 },
          { subject_id: 112, subject_name: 'SCIENCE', score: 88 },
          { subject_id: 175, subject_name: 'SOCIAL SCIENCE', score: 89 },
        ],
      },
    ],
  },
];

const StudentPage = () => {
  const [filteredData, setFilteredData] = useState(StudentData);
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = StudentData.filter(
      (item) =>
        item.student_name.toLowerCase().includes(value) ||
        item.student_id.toString().includes(value) ||
        item.student_admission_no.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const data = generateAttendanceData(date);
    setAttendanceData(data);
  };

  const generateAttendanceData = (selectedDate) => {
    if (!selectedDate) return [];
  
    const startDate = startOfMonth(selectedDate);
    const endDate = endOfMonth(selectedDate);
    const days = eachDayOfInterval({ start: startDate, end: endDate });
  
    return [
      {
        staff_id: 491,
        staff_name: 'Sania',
        ...Object.fromEntries(
          days.map((day) => [
            format(day, 'yyyy-MM-dd'),
            Math.random() > 0.8
              ? 'Absent'
              : Math.random() > 0.6
              ? 'Leave'
              : 'Present',
          ])
        ),
      },
      // Add other staff attendance records similarly
    ];
  };

  const columns = [
    {
      title: 'Student Avatar',
      dataIndex: 'student_photo',
      key: 'student_photo',
      render: (text, record) => (
        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}>
          {record.student_photo ? (
            <img
              src={record.student_photo}
              alt="avatar"
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Avatar icon={<UserOutlined />} />

          )}
        </Avatar>
      ),
    },
    { title: 'StudentId', dataIndex: 'student_id', key: 'student_id' },
    {
      title: 'StudentAdmnNo',
      dataIndex: 'student_admission_no',
      key: 'student_admission_no',
    },
    { title: 'StudentName', dataIndex: 'student_name', key: 'student_name' },
   
    {
      title: 'NoOfDaysPresent',
      dataIndex: 'student_total_presenting_days',
      key: 'student_total_presenting_days',
    },
    
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (text, record) => <Rate disabled defaultValue={record.rating} />,
    },
  ];

  const expandedRowRender = (record) => {
    const testColumns = [
      {
        title: 'Subjects & Scores',
        dataIndex: 'subjects',
        key: 'subjects',
        render: (text, test) => (
          <Card>
            <div
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              {test.test_name}
            </div>
            <Row gutter={[8, 8]} style={{ textAlign: 'center' }}>
              {test.subjects.map((subject, index) => (
                <Col
                  span={4}
                  key={index}
                  style={{ border: '1px solid #f0f0f0', padding: '8px' }}
                >
                  <div
                    style={{
                      borderBottom: '1px solid #f0f0f0',
                      paddingBottom: '4px',
                    }}
                  >
                    {subject.subject_name}
                  </div>
                  <div style={{ textAlign: 'center' }}>{subject.score}</div>
                </Col>
              ))}
            </Row>
          </Card>
        ),
      },
    ];

    return (
      <Table
        columns={testColumns}
        dataSource={record.tests.map((test) => ({
          ...test,
          key: test.test_id,
        }))}
        pagination={false}
        showHeader={false}
      />
    );
  };

  const daysInMonth = (date) => {
    if (!date) return [];
    const startDate = startOfMonth(date);
    const endDate = endOfMonth(date);
    return eachDayOfInterval({ start: startDate, end: endDate }).map((day) =>
      format(day, 'yyyy-MM-dd')
    );
  };

  const attendanceColumns = [
    {
      title: 'Employee ID',
      dataIndex: 'staff_id',
      key: 'staff_id',
    },
    {
      title: 'Employee Name',
      dataIndex: 'staff_name',
      key: 'staff_name',
    },
    ...daysInMonth(selectedDate).map((date) => ({
      title: format(new Date(date), 'dd'),
      dataIndex: date,
      key: date,
      render: (status) => {
        let color;
        switch (status) {
          case 'Present':
            color = 'green';
            break;
          case 'Absent':
            color = 'red';
            break;
          case 'Leave':
            color = 'pink';
            break;
          default:
            color = 'grey';
        }
        return <span style={{ color }}>{status[0]}</span>;
      },
    })),
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Content  style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}>
        <h2
          style={{
            marginRight: 'auto',
            fontWeight: '700',
            color: '#252525',
            fontStyle: 'italic',
            letterSpacing: '1.2px',
          }}
        >
          Student Details/Attendance
        </h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Student" key="1">
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '20px',
              }}
            >
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={handleSearch}
                style={{ width: 300 }}
              />
            </div>
            <Table
              columns={columns}
              dataSource={filteredData.map((student) => ({
                ...student,
                key: student.student_id,
              }))}
              expandable={{
                expandedRowRender,
                expandIcon: ({ expanded, onExpand, record }) =>
                  expanded ? (
                    <DownOutlined onClick={(e) => onExpand(record, e)} />
                  ) : (
                    <RightOutlined onClick={(e) => onExpand(record, e)} />
                  ),
                expandIconColumnIndex: columns.length,
              }}
            />
          </TabPane>
          <TabPane tab="Attendance" key="2" style={{ height: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginBottom: '20px',
                }}
              >
                <DatePicker
                  picker="month"
                  onChange={handleDateChange}
                  style={{ width: 200 }}
                />
              </div>
              <Table
                columns={attendanceColumns}
                dataSource={attendanceData}
                pagination={false}
                style={{ flex: 1, overflow: 'auto' }}
              />
            </div>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default StudentPage;
