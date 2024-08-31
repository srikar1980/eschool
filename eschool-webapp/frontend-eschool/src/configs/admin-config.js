import {
  UserOutlined,
  FieldTimeOutlined,
  EditOutlined,
  FundOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from './app-config';

const directRoutes = [
  {
    key: 'Dashboard',
    title: 'OVERVIEW', // Main heading for direct routes
    items: [
      {
        key: 'Dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'Dashboard',
        icon: FundOutlined,
        breadcrumb: false,
      },
      {
        key: 'Staff',
        path: `${APP_PREFIX_PATH}/staff`,
        title: 'Staff',
        icon: ReadOutlined,
        breadcrumb: false,
      },
      {
        key: 'Students',
        path: `${APP_PREFIX_PATH}/students`,
        title: 'Students',
        icon: UserOutlined,
        breadcrumb: false,
      },
      {
        key: 'Events',
        path: `${APP_PREFIX_PATH}/events`,
        title: 'Events',
        icon: ReadOutlined,
        breadcrumb: false,
      },
      {
        key: 'Timetable',
        path: `${APP_PREFIX_PATH}/timetable`,
        title: 'Time Table',
        icon: FieldTimeOutlined,
        breadcrumb: false,
      },
      {
        key: 'Exams',
        path: `${APP_PREFIX_PATH}/exams-calendar`,
        title: 'Exam Calendar',
        icon: EditOutlined,
        breadcrumb: false,
      },
      
      {
        key: 'ReportCards',
        path: `${APP_PREFIX_PATH}/report-cards`,
        title: 'ReportCards',
        icon: EditOutlined,
        breadcrumb: false,
      },
      {
        key: 'Reports Analysis',
        path: `${APP_PREFIX_PATH}/reports-analysis`,
        title: 'Reports Analysis',
        icon: FundOutlined,
        breadcrumb: false,
      },
      {
        key: 'Accounts',
        path: `${APP_PREFIX_PATH}/accounts`,
        title: 'Accounts',
        icon: EditOutlined,
        breadcrumb: false,
      },
    ],
  },
];

const submenuRoutes = [
  {
    key: 'SubmenuRoutes',
    title: 'MANAGEMENT', // Main heading for submenu routes
    items: [
      {
        key: 'Infrasetup',
        path: `${APP_PREFIX_PATH}/infra-setup`,
        title: 'Infrastructure Setup',
        icon: FieldTimeOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'institution-info',
            path: `${APP_PREFIX_PATH}/infra-setup/institution-info`,
            title: 'Institution Info',
            breadcrumb: false,
          },
          {
            key: 'infra-structure',
            path: `${APP_PREFIX_PATH}/infra-setup/structure`,
            title: 'Structure',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'PMO',
        path: `${APP_PREFIX_PATH}/user-management`,
        title: 'Users Management',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'teachers-management',
            path: `${APP_PREFIX_PATH}/user-management/teachers-management`,
            title: 'Teachers Management',
            breadcrumb: false,
          },
          {
            key: 'students-management',
            path: `${APP_PREFIX_PATH}/user-management/students-management`,
            title: 'Students Management',
            breadcrumb: false,
          },
          {
            key: 'admin-access-control-management',
            path: `${APP_PREFIX_PATH}/user-management/admin-access-control-management`,
            title: 'Admin Access Controls',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'Registration',
        path: `${APP_PREFIX_PATH}/registration`,
        title: 'Academic Year Calender',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'onboard-resource',
            path: `${APP_PREFIX_PATH}/registration/onboard-resource`,
            title: 'Academic Year Setup',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'Guide',
        path: `${APP_PREFIX_PATH}/guide`,
        title: 'Attendance Control',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'guide',
            path: `${APP_PREFIX_PATH}/guide/guide-page`,
            title: 'Attendance Access',
            breadcrumb: false,
          },
        ],
      },
    ],
  },
];

const AdminConfig = [...directRoutes, ...submenuRoutes];

export default AdminConfig;
