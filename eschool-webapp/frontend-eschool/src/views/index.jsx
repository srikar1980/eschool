import { Routes, Route } from 'react-router-dom';

import AppLayout from '../layouts/app-layout';

const Views = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  );
};

export default Views;
