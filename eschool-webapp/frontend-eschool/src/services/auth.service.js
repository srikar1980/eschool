import { apiRoutes, postAPIRequest } from '../api';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../utils/localStorage';

// Login function
const login = async (data) => {
  try {
    // Optional: Add custom headers if required
    const customHeaders = { 'Content-Type': 'application/json' };

    const response = await postAPIRequest(apiRoutes.login.url, data, customHeaders);
    console.log('res', response);

    // if (response?.data?._id) {
    //   setLocalStorage('userInfo', response.data); // Save user info to local storage
    // } else {
    //   throw new Error('User ID field missing in response');
    // }

    if (response?.data?.token) {
      // Save only the token to localStorage
      setLocalStorage('token', response.data.token);
    } else {
      throw new Error('Token field missing in response');
    }

    return response.data; // Return the user data
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Modified logout function (accepts navigate as a parameter)
const logout = (navigate) => {
  const retrieveToken = getLocalStorage('token');

  if (retrieveToken) {
    removeLocalStorage('token'); // Remove user info from local storage
  }

  // Navigate to the login page
  navigate('/app/login');
};

const authService = {
  login,
  logout,
};

export default authService;
