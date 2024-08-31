import { apiRoutes, getAPIRequest } from '../api';

const staffDetails = async (data) => {
  try {
    const response = await getAPIRequest(apiRoutes.login.url, data);
    if (response?.data?.data?.userId) {
    } else {
      // throw error when userId is not present we cannot move further
      //TODO use I18N
      throw new Error('userId field missing in response');
    }
    //TODO throw error if the response data is not present
    return response?.data;
  } catch (error) {
    throw error;
  }
};







const staffService = {
  staffDetails,
  
};

export default staffService;
