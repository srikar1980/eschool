import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../../../components/shared-components/Loading';

// Lazy load the components
const InstitutionInfo = lazy(() => import('./institutionInfo'));
const Structure = lazy(() => import('./structure'));

const Timesheet = () => {
  return (
    <Suspense fallback={<Loading cover="content" align="center" />}>
      <Routes>
        <Route path="institution-info" element={<InstitutionInfo />} />
        <Route path="structure" element={<Structure />} />
        <Route path="*" element={<Navigate to="institution-info" />} />
      </Routes>
    </Suspense>
  );
};

export default Timesheet;
