/* eslint-disable prettier/prettier */
import config from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
import * as RootNavigation from '../../RootNavigation';
// Axios.defaults.timeout = 2;
const headers = {
  'Content-Type': 'multipart/form-data',
};

const headersLogin = {
  'Content-Type': 'application/json',
};

export const getMethod = async (data: any) => {
  let dataUser = await AsyncStorage.getItem('name');
  let token = await AsyncStorage.getItem('token');
  let signature_key = await AsyncStorage.getItem('signatureKey');
  const headersJwt = {
    token: token,
    'signature-key': signature_key,
    'request-by': dataUser,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.get(config.API_URL + data.url, {
      headers: headersJwt,
      timeout: 20000,
    });

    return response;
  } catch (e: any) {
    if (e.response !== undefined && e.response.data !== undefined) {
      if (e.response.status === 2 ||
        e.response.status === 501 ||
        e.response.status === 502 ||
        e.response.status === 503 ||
        e.response.status === 504 ||
        e.response.status === 403 ||
        e.response.status === 404 ||
        e.response.status === 405) {
        showMessage({
          message: 'Fail',
          description: 'Internal server error',
          type: 'danger',
        });
        RootNavigation.replace('Error');
        return e;
      }
      else {
        if (e.response.data.status.description[0] === 'Your token is expired!') {
          const refresh = await refreshToken();
          if (refresh.status === 2) {
            const newRefresh = await refreshToken();
            if (newRefresh.data.status.status_code === '00') {
              const headersJwtRefresh = {
                token: newRefresh.data.auth.token,
                'signature-key': signature_key,
                'Content-Type': 'application/json',
                'request-by': dataUser,
              };
              const responseRefresh = await axios.get(config.API_URL + data.url, {
                headers: headersJwtRefresh,
              });
              return responseRefresh;
            }
          }
          else {
            if (refresh.status !== 500) {
              if (refresh.data.status.status_code === '00') {
                const headersJwtRefresh = {
                  token: refresh.data.auth.token,
                  'signature-key': signature_key,
                  'Content-Type': 'application/json',
                  'request-by': dataUser,
                };
                const responseRefresh = await axios.get(config.API_URL + data.url, {
                  headers: headersJwtRefresh,
                });
                return responseRefresh;
              }
            }
            else{
              return e;
            }
          }
        } else {
          return e.response;
        }
      }
    }
    else {
      return e;
    }
  }
};

export const getLocationMethod = async (data: any) => {
  try {
    const response = await axios.get(data.url, {
      // headers: headersJwt,
      timeout: 20000,
    });

    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const postMethod = async (data: any) => {
  let dataUser = await AsyncStorage.getItem('name');
  let token = await AsyncStorage.getItem('token');
  let signature_key = await AsyncStorage.getItem('signatureKey');
  const headersJwt = {
    token: token,
    'signature-key': signature_key,
    'request-by': dataUser,
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(config.API_URL + data.url, data.body,
      {
        headers: headersJwt,
        timeout: 20000,
      },
    );
    return response;
  } catch (e: any) {
    const refresh = await refreshToken();
    if (e.response !== undefined && e.response.data !== undefined) {
      if (e.response.status === 2 ||
        e.response.status === 501 ||
        e.response.status === 502 ||
        e.response.status === 503 ||
        e.response.status === 504 ||
        e.response.status === 403 ||
        e.response.status === 404 ||
        e.response.status === 405) {
        showMessage({
          message: 'Fail',
          description: 'Internal server error',
          type: 'danger',
        });
        RootNavigation.replace('Error');
        return e;
      }
      else {
        if (e.response.data.status.description[0] === 'Your token is expired!') {
          // async function getData() {
          if (refresh.status === 2) {
            const refreshNew = await refreshToken();
            if (refreshNew.data.status.status_code === '00') {
              const headersJwtRefresh = {
                token: refreshNew.data.auth.token,
                'signature-key': signature_key,
                'Content-Type': 'application/json',
                'request-by': dataUser,
              };
              const responseRefresh = await axios.post(
                config.API_URL + data.url,
                data.body,
                {
                  headers: headersJwtRefresh,
                },
              );
              return responseRefresh;
            }
          }
          else {
            if (refresh.status !== 500) {
              if (refresh.data.status.status_code === '00') {
                const headersJwtRefresh = {
                  token: refresh.data.auth.token,
                  'signature-key': signature_key,
                  'Content-Type': 'application/json',
                  'request-by': dataUser,
                };
                const responseRefresh = await axios.post(
                  config.API_URL + data.url,
                  data.body,
                  {
                    headers: headersJwtRefresh,
                  },
                );
                return responseRefresh;
              }
            }
            else {
              return e;
            }
          }
          // }
          // getData();
        } else {
          return e.response;
        }
      }
    }
    else {
      return e;
    }
  }
};

export const putMethod = async (data: any) => {
  let dataUser = await AsyncStorage.getItem('name');
  let token = await AsyncStorage.getItem('token');
  let signature_key = await AsyncStorage.getItem('signatureKey');
  const headersJwt = {
    token: token,
    'signature-key': signature_key,
    'request-by': dataUser,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.put(config.API_URL + data.url, data.body, {
      headers: headersJwt,
      timeout: 20000,
    });

    return response;
  } catch (e: any) {
    if (e.response.status === 2 ||
      e.response.status === 501 ||
      e.response.status === 502 ||
      e.response.status === 503 ||
      e.response.status === 504 ||
      e.response.status === 403 ||
      e.response.status === 404 ||
      e.response.status === 405) {
      showMessage({
        message: 'Fail',
        description: 'Internal server error',
        type: 'danger',
      });
      RootNavigation.replace('Error');
      return e;
    }
    else {
      if (e.response !== undefined && e.response.data !== undefined) {
        if (e.response.data.status.description[0] === 'Your token is expired!') {
          const refresh = await refreshToken();
          if (refresh.status === 2) {
            const refreshNew = await refreshToken();
            if (refreshNew.data.status.status_code === '00') {
              const headersJwtRefresh = {
                token: refreshNew.data.auth.token,
                'signature-key': signature_key,
                'Content-Type': 'application/json',
                'request-by': dataUser,
              };
              const responseRefresh = await axios.put(
                config.API_URL + data.url,
                data.body,
                {
                  headers: headersJwtRefresh,
                },
              );
              return responseRefresh;
            }

          }
          else {
            if (refresh.status !== 500) {
              if (refresh.data.status.status_code === '00') {
                const headersJwtRefresh = {
                  token: refresh.data.auth.token,
                  'signature-key': signature_key,
                  'Content-Type': 'application/json',
                  'request-by': dataUser,
                };
                const responseRefresh = await axios.put(
                  config.API_URL + data.url,
                  data.body,
                  {
                    headers: headersJwtRefresh,
                  },
                );
                return responseRefresh;
              }
            }
            else{
              return e;
            }

          }
        } else {
          return e.response;
        }
      }
      else {
        return e;
      }
    }
  }
};

export const deleteMethod = async (data: any) => {
  let dataUser = await AsyncStorage.getItem('name');
  let token = await AsyncStorage.getItem('token');
  let signature_key = await AsyncStorage.getItem('signatureKey');
  const headersJwt = {
    token: token,
    'signature-key': signature_key,
    'request-by': dataUser,
    'Content-Type': 'application/json',
  };
  try {
    // const response = await axios.delete(config.API_URL + data.url);
    const response = await axios.delete(config.API_URL + data.url, {
      headers: headersJwt,
      timeout: 20000,
    });
    return response;
  } catch (e: any) {
    if (e.response !== undefined && e.response.data !== undefined) {
      if (e.response.status === 2 ||
        e.response.status === 501 ||
        e.response.status === 502 ||
        e.response.status === 503 ||
        e.response.status === 504 ||
        e.response.status === 403 ||
        e.response.status === 404 ||
        e.response.status === 405) {
        showMessage({
          message: 'Fail',
          description: 'Internal server error',
          type: 'danger',
        });
        RootNavigation.replace('Error');
        return e;
      }
      else {
        if (e.response.data.status.description[0] === 'Your token is expired!') {
          // async function getData() {
          const refresh = await refreshToken();
          if (refresh.status === 2) {
            const refreshNew = await refreshToken();

            if (refreshNew.data.status.status_code === '00') {
              const headersJwtRefresh = {
                token: refreshNew.data.auth.token,
                'signature-key': signature_key,
                'Content-Type': 'application/json',
                'request-by': dataUser,
              };
              const responseRefresh = await axios.delete(
                config.API_URL + data.url,
                {
                  headers: headersJwtRefresh,
                },
              );
              return responseRefresh;
            }
          }
          else {
            if (refresh.status !== 500) {
              if (refresh.data.status.status_code === '00') {
                const headersJwtRefresh = {
                  token: refresh.data.auth.token,
                  'signature-key': signature_key,
                  'Content-Type': 'application/json',
                  'request-by': dataUser,
                };
                const responseRefresh = await axios.delete(
                  config.API_URL + data.url,
                  {
                    headers: headersJwtRefresh,
                  },
                );
                return responseRefresh;
              }
            }
            else{
              return e;
            }
          }
          // }
          // getData();
        } else {
          return e.response;
        }
      }
    }
  }
};

const refreshToken = async () => {
  let dataUser = await AsyncStorage.getItem('name');
  let token = await AsyncStorage.getItem('token');
  let signature_key = await AsyncStorage.getItem('signatureKey');
  const headersJwt = {
    token: token,
    'signature-key': signature_key,
    'request-by': dataUser
  };

  try {
    const response = await axios.get(`${config.API_URL}v1/auth/refresh-token`, {
      headers: headersJwt,
    });
    if (response.data.status.status_code === '00') {
      AsyncStorage.setItem('token', response.data.auth.token);
    }

    return response;
  } catch (e: any) {
    return e.response;
  }
};

// export const postMethodPushNotification = async data => {
//   const headersJwt = {
//     Authorization: config.NOTIFICATION_KEY,
//     'Content-Type': 'application/json',
//   };
//   try {
//     const response = await Axios.post(data.url, data.body, {
//       headers: headersJwt,
//     });

//     return response;
//   } catch (e) {
//     return e.response;
//   }
// };
