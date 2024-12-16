import { getLocalStorage } from "../utils/localStorage";

export const authHeader = () => {
  const authorization = getLocalStorage('authorization');
  if (authorization?.accessToken?.token) {
    return { Authorization: authorization.accessToken.token };
  } else {
    return {};
  }
};

export default authHeader;
