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
        key: 'Assignments',
        path: `${APP_PREFIX_PATH}/assignments`,
        title: 'Assignments',
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
        key: 'Classwise Reports Analysis',
        path: `${APP_PREFIX_PATH}/reports-analysis`,
        title: 'Classwise Reports Analysis',
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
            path: `${APP_PREFIX_PATH}/infra-setup/school-classroom`,
            title: 'School and Classroom',
            breadcrumb: false,
          },
          {
            key: 'infra-structure',
            path: `${APP_PREFIX_PATH}/infra-setup/student-houses`,
            title: 'Student Houses',
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
        key: 'Leaves',
        path: `${APP_PREFIX_PATH}/leaves-management`,
        title: 'Leaves Management',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'onboard-resource',
            path: `${APP_PREFIX_PATH}/leaves-management/leaves-manager`,
            title: 'Leaves Manager',
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
        key: 'Events',
        path: `${APP_PREFIX_PATH}/events-holidays`,
        title: 'Events and Holidays',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'onboard-resource',
            path: `${APP_PREFIX_PATH}/events-holidays/schedule-events-holidays`,
            title: 'Schedule Events and Holidays',
            breadcrumb: false,
          },
        ],
      },
      
      {
        key: 'AssessmentGrading',
        path: `${APP_PREFIX_PATH}/assessment-grading`,
        title: 'Assessment and Grading',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'assessment-grading',
            path: `${APP_PREFIX_PATH}/assessment-grading/leaves-manager`,
            title: 'Report Settings',
            breadcrumb: false,
          },
          {
            key: 'assessment-grading',
            path: `${APP_PREFIX_PATH}/assessment-grading/leaves-manager`,
            title: 'Target Settings',
            breadcrumb: false,
          },
          {
            key: 'assessment-grading',
            path: `${APP_PREFIX_PATH}/assessment-grading/leaves-manager`,
            title: 'Grade Point Setup',
            breadcrumb: false,
          },
          {
            key: 'assessment-grading',
            path: `${APP_PREFIX_PATH}/assessment-grading/leaves-manager`,
            title: 'Markbook Setup',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'BlueprintSetup',
        path: `${APP_PREFIX_PATH}/blueprint-settings`,
        title: 'Blueprint Settings',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'attendance-control',
            path: `${APP_PREFIX_PATH}/blueprint-settings/blueprint-setup`,
            title: 'Blueprint setup for exams',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'AcademicBehaviour',
        path: `${APP_PREFIX_PATH}/academic-behaviour`,
        title: 'Academic Behaviour',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'attendance-control',
            path: `${APP_PREFIX_PATH}/academic-behaviour/scholastic-setup`,
            title: 'Scholastic and Co-Scholastic Setup',
            breadcrumb: false,
          },
        ],
      },
      {
        key: 'Attendance',
        path: `${APP_PREFIX_PATH}/attendance-control`,
        title: 'Attendance Control',
        icon: EditOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'attendance-control',
            path: `${APP_PREFIX_PATH}/attendance-control/attendance-access`,
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


