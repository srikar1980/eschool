// import { Routes, Route, Navigate } from 'react-router-dom';

// // Import other components as needed
// import Dashboard from './Dashboard';
// import Staff from './Staff';
// import Students from './Students';
// import Events from './Events';
// import Timetable from './Timetable';
// import Accounts from './Accounts';
// import ReportCards from './ReportCards';
// import PerformanceAnalysis from './PerformanceAnalysis';
// import InstitutionInfo from './Timesheet/institutionInfo';
// import Structure from './Timesheet/structure';
// import TeachersManagement from './PMO/teachersManagement';
// import StudentsManagement from './PMO/studentsManagement';
// import AdminAccessControl from './PMO/adminAccessControlManagement';
// import AcademicYearSetup from './Registration/onboardResource';
// import { APP_PREFIX_PATH } from '../../configs/app-config';

// function AppViews() {

//   return (
//     <Routes>
//       <Route path={`${APP_PREFIX_PATH}/dashboard`} element={<Dashboard />} />
//       <Route path={`${APP_PREFIX_PATH}/staff`} element={<Staff />} />
//       <Route path={`${APP_PREFIX_PATH}/students`} element={<Students />} />
//       <Route path={`${APP_PREFIX_PATH}/events`} element={<Events />} />
//       <Route path={`${APP_PREFIX_PATH}/timetable`} element={<Timetable />} />
//       <Route path={`${APP_PREFIX_PATH}/accounts`} element={<Accounts />} />
//       <Route
//         path={`${APP_PREFIX_PATH}/report-cards`}
//         element={<ReportCards />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/performance-analysis`}
//         element={<PerformanceAnalysis />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/infra-setup/institution-info`}
//         element={<InstitutionInfo />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/infra-setup/structure`}
//         element={<Structure />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/user-management/teachers-management`}
//         element={<TeachersManagement />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/user-management/students-management`}
//         element={<StudentsManagement />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/user-management/admin-access-control-management`}
//         element={<AdminAccessControl />}
//       />
//       <Route
//         path={`${APP_PREFIX_PATH}/registration/onboard-resource`}
//         element={<AcademicYearSetup />}
//       />

//       <Route
//         path="*"
//         element={<Navigate to={`${APP_PREFIX_PATH}/dashboard`} replace />}
//       />
//     </Routes>
//   );
// }

// export default AppViews;

import { Routes, Route, Navigate } from 'react-router-dom';

// Import other components as needed
import Dashboard from './Dashboard';
import Staff from './Staff';
import Students from './Students';
import Events from './Events';
import Timetable from './Timetable';
import Accounts from './Accounts';
import ReportCards from './ReportCards';
import Profile from './Profile';
import PerformanceAnalysis from './PerformanceAnalysis';
import InstitutionInfo from './Timesheet/institutionInfo';
import Structure from './Timesheet/structure';
import TeachersManagement from './PMO/teachersManagement';
import StudentsManagement from './PMO/studentsManagement';
import AdminAccessControl from './PMO/adminAccessControlManagement';
import AcademicYearSetup from './Registration/onboardResource';
// import { APP_PREFIX_PATH } from '../../configs/app-config';

function AppViews() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="staff" element={<Staff />} />
      <Route path="students" element={<Students />} />
      <Route path="events" element={<Events />} />
      <Route path="timetable" element={<Timetable />} />
      <Route path="accounts" element={<Accounts />} />
      <Route path="report-cards" element={<ReportCards />} />
      <Route path="reports-analysis" element={<PerformanceAnalysis />} />
      <Route
        path="infra-setup/institution-info"
        element={<InstitutionInfo />}
      />
      <Route path="infra-setup/structure" element={<Structure />} />
      <Route
        path="user-management/teachers-management"
        element={<TeachersManagement />}
      />
      <Route
        path="user-management/students-management"
        element={<StudentsManagement />}
      />
      <Route
        path="user-management/admin-access-control-management"
        element={<AdminAccessControl />}
      />
      <Route
        path="registration/onboard-resource"
        element={<AcademicYearSetup />}
      />

      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}

export default AppViews;
