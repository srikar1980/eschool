import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../../../components/shared-components/Loading';

// Lazy load the components
const OnboardResource = lazy(() => import('./onboardResource'));

const Registration = () => {
  return (
    <Suspense fallback={<Loading cover="content" align="center" />}>
      <Routes>
        <Route path="onboard-resource" element={<OnboardResource />} />
        <Route path="*" element={<Navigate to="onboard-resource" />} />
      </Routes>
    </Suspense>
  );
};

export default Registration;
