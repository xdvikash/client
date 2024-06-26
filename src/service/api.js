import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from '../constents/config.js';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        // stop global loader here
        return ProcessResponse(response);
    },
    function (error) {
        // Stop Global loader here
        return Promise.reject(ProcessError(error))
    }
)

////////////////////////////////
// if success -> return {isSuccess: true, data: Object }
// if fail -> return { isFailure: true, Status: string, code: init}
////////////////////////////////

const ProcessResponse = (response) => {
    if (response?.status === 200){
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            message: response?.message,
            code: response?.code
        }
    }
}

////////////////////////////////
// if success -> return {isSuccess: true, data: Object }
// if fail -> return { isFailure: true, Status: string, code: init}
////////////////////////////////

const ProcessError = (error) => {
    if (error.response) {
        // Request made and server responsed with a status other 
        // that fail out of the range 2.x.x
        console.log('ERROR IN RESPONSE: ', error.toJSON());
        return{
            isError: true,
            message: API_NOTIFICATION_MESSAGE.responseFailure,
            code: error.response.status
        }
    } else if(error.request) {
        // request made but no response was received
        console.log('ERROR IN REQUEST: ', error.toJSON());
        return{
            isError: true,
            message: API_NOTIFICATION_MESSAGE.requestFailure,
            code: ""
        }        
    } else {
        // somethis happend in setting up request that trigger an error
        console.log('ERROR IN NETWORK: ', error.toJSON());
        return{
            isError: true,
            message: API_NOTIFICATION_MESSAGE.networkError,
            code: ""
        }
    }
}

const API = {};

for(const [key,value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (progressEvent){
                if(showUploadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent){
                if(showDownloadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
}

export { API };


