import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../../../components/shared-components/Loading';

// Lazy load the components
const TeachersManagement = lazy(() => import('./teachersManagement'));
const StudentsManagement = lazy(() => import('./studentsManagement'));
const AdminAccessControlManagement = lazy(() =>
  import('./adminAccessControlManagement')
);

const PMO = () => {
  return (
    <Suspense fallback={<Loading cover="content" align="center" />}>
      <Routes>
        <Route path="teachers-management" element={<TeachersManagement />} />
        <Route path="students-management" element={<StudentsManagement />} />
        <Route
          path="admin-access-control-management"
          element={<AdminAccessControlManagement />}
        />
        <Route path="*" element={<Navigate to="teachers-management" />} />
      </Routes>
    </Suspense>
  );
};

export default PMO;
