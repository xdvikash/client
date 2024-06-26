// API_NOTIFICATION_MESSAGE

export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: 'Loading...!',
        message: 'Data is being loading, Please wait'
    },
    success: {
        title: 'Success',
        message: 'Data Successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. please try again.'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occure while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server, Please check inetrnet Connectivity and try agin later',
    }
}


// API service call 
//SAMPLE REQUEST
// NEED SERVICE CALL : {url '/', method: 'POST/GET/PUT/DELETE' PARAMS: TRUE/FALS,QUERY : TRUE/FALS }

export const SERVICE_URL = {
    userSignup: {url: '/signup', method: 'POST'},
    userLogin: {url: '/login', method: 'POST'}
}