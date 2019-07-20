import axios from 'axios';
import config from 'Constants/AppConfig';

var axiosObj = axios.create({
   // baseURL: 'http://reactify.theironnetwork.org/data/',
   baseURL: config.apiBaseUrl + '/',
   timeout: 2000
});

var token = '';
var user = localStorage.getItem('user');
if (user) {
   const profile = user.profile;
   if (profile) {
      token = profile.user.token;
   }
}

axiosObj.defaults.headers.common['Authorization'] = 'Bearer ' + token;

var methods = {
   get: async function (endPoint, data, token) {
      try {
         return await axiosObj.get(endPoint, {
            params: data
         });
      } catch (error) {
         return error;
      }
   },
   put: async function (endPoint, data) {
      try {
         return await axiosObj.put(endPoint, data);
      } catch (error) {
         return error;
      }

   },
   post: async function (endPoint, data) {
      try {
         return await axiosObj.post(endPoint, data);
      } catch (error) {
         return error;
      }

   },
   delete: async function (endPoint, data) {
      try {
         return await axiosObj.delete(endPoint, {
            params: data
         });
      } catch (error) {
         return error;
      }
   }
}

export default methods;
