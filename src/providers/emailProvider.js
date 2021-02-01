import axiosMyProvider from './config/axiosProvider'

const config = {
    header: {
        "Content-Type": "application/json"
    },
    responseType: "json"
}


export const sendEmail = (obj) => {
    return axiosMyProvider.post('email/send-email', obj);
}