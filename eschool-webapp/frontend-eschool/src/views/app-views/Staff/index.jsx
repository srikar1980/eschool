import { useEffect, useState } from 'react';
import {
  DownOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Table, Tabs, Layout, Input, Avatar, DatePicker } from 'antd';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { data } from './staffData';
import { useDispatch, useSelector } from 'react-redux';
import { getStaffData, staffDataSelector } from '../../../redux/reducers/staffReducer';

const { TabPane } = Tabs;
const { Content } = Layout;

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

const StaffPage = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('1'); // To track the active tab

  const dispatch = useDispatch();
  const { loading, error, staffDataInfo } = useSelector(staffDataSelector);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    dispatch(getStaffData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("data from redux",staffDataInfo)



  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = staffDataInfo.filter(
      (item) =>
        item.staff_name.toLowerCase().includes(value) ||
        item.staff_id.toString().includes(value) ||
        item.staff_main_subject.toLowerCase().includes(value) ||
        item.attended_days.toString().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const data = generateAttendanceData(date);
    setAttendanceData(data);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const expandedRowRender = (record) => {
    const columns = [
      {
        title: 'Class',
        key: 'class',
        dataIndex: 'class',
        render: (_, subject) =>
          `${subject.classroom_std || 'N/A'}-${
            subject.classroom_section || 'N/A'
          }`,
      },
      {
        title: 'Percentage Secured',
        dataIndex: 'secure_percentage',
        key: 'secure_percentage',
      },
      {
        title: 'Target Achieved',
        dataIndex: 'target_str',
        key: 'target_str',
      },
    ];

    const expandedData = record.subjects.map((subject) => ({
      key: subject.subject_id,
      classroom_std: subject.classroom_std,
      classroom_section: subject.classroom_section,
      secure_percentage: subject.secure_percentage,
      target_str: subject.target_str,
    }));

    return (
      <Table columns={columns} dataSource={expandedData} pagination={false} />
    );
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'staff_photo',
      key: 'staff_photo',
      render: (text) =>
        text ? (
          <img src={text} alt="staff" style={{ width: 50, height: 50 }} />
        ) : (
          <Avatar icon={<UserOutlined />} />
        ),
    },

    {
      title: 'Staff Name',
      dataIndex: 'staff_name',
      key: 'staff_name',
      filters: data.map((item) => ({
        text: item.staff_name,
        value: item.staff_name,
      })),
      onFilter: (value, record) =>
        record.staff_name.toLowerCase().includes(value.toLowerCase()),
    },

    {
      title: 'Main Subject',
      dataIndex: 'staff_main_subject',
      key: 'staff_main_subject',
      filters: data.map((item) => ({
        text: item.staff_main_subject,
        value: item.staff_main_subject,
      })),
      onFilter: (value, record) =>
        record.staff_main_subject.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: 'Attended Days',
      dataIndex: 'attended_days',
      key: 'attended_days',
      filters: data.map((item) => ({
        text: item.attended_days,
        value: item.attended_days,
      })),
      onFilter: (value, record) =>
        record.attended_days.toString().includes(value),
    },
    {
      title: 'Total No. of Leaves',
      dataIndex: 'total_no_of_leaves',
      key: 'total_no_of_leaves',
      filters: data.map((item) => ({
        text: item.total_no_of_leaves,
        value: item.total_no_of_leaves,
      })),
      onFilter: (value, record) =>
        record.total_no_of_leaves.toString().includes(value),
    },
    {
      title: 'Taken Leaves',
      dataIndex: 'staff_taken_leaves',
      key: 'staff_taken_leaves',
      filters: data.map((item) => ({
        text: item.staff_taken_leaves,
        value: item.staff_taken_leaves,
      })),
      onFilter: (value, record) =>
        record.staff_taken_leaves.toString().includes(value),
    },
  ];

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
    <Layout>
      <Content
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          // height: '100%',
        }}
      >
        <h2
          style={{
            marginRight: 'auto',
            fontWeight: '700',
            color: '#252525',
            fontStyle: 'italic',
            letterSpacing: '1.2px',
          }}
        >
          Staff Details/Attendance
        </h2>
        <Tabs
          defaultActiveKey="1"
          onChange={handleTabChange}
          style={{ flex: 1, width: '100%' }}
        >
          <TabPane tab="Staff" key="1" style={{ height: '100%' }}>
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
                expandable={{
                  expandedRowRender,
                  expandIcon: ({ expanded, onExpand, record }) =>
                    expanded ? (
                      <DownOutlined onClick={(e) => onExpand(record, e)} />
                    ) : (
                      <RightOutlined onClick={(e) => onExpand(record, e)} />
                    ),
                  expandIconColumnIndex: columns.length, // Move the expand icon to the right
                }}
                dataSource={filteredData.length ? filteredData : staffDataInfo}                pagination={false}
                // style={{ flex: 1, overflow: 'auto' }}
              />
            </div>
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

export default StaffPage;

