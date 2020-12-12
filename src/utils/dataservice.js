import axios from 'axios';

const getServerUrl = () => {
  let url = '';
  if (process.env.NODE_ENV === 'development') {
    url = process.env.REACT_APP_API_STAGING_URL;
  } else if (process.env.NODE_ENV === 'production') {
    url = process.env.REACT_APP_API_PROD_URL;
  }
  return url;
};

export const postData = async (route, body) => {
  try {
    const serverUrl = getServerUrl();
    const url = `${serverUrl}${route}`;
    const result = await axios.post(url, body);
    return result.data;
  } catch (e) {
    throw e.response;
  }
};
