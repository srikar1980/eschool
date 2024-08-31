import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import Login from './views/app-views/Login/Login';
import AppViews from './views/app-views';
import { APP_PREFIX_PATH } from './configs/app-config';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${APP_PREFIX_PATH}/login`} element={<Login />} />
        <Route
          path={`${APP_PREFIX_PATH}/change-password`}
          element={<Navigate to={`${APP_PREFIX_PATH}/login`} replace />}
        />
        <Route
          path={`${APP_PREFIX_PATH}/*`}
          element={
            <AppLayout>
              <AppViews />
            </AppLayout>
          }
        />
        <Route
          path="*"
          element={<Navigate to={`${APP_PREFIX_PATH}/login`} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
