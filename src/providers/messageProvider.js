import axiosMyProvider from './config/axiosProvider'

const config = {
    header: {
        "Content-Type": "application/json"
    },
    responseType: "json"
}

export const getMessages = (obj) => {
    return axiosMyProvider.post("/message/get-messages", obj, config);
}

export const updateMessage = (obj) => {
    return axiosMyProvider.post("/message/update-message", obj, config);
}

export const addMessage = (obj) => {
    return axiosMyProvider.post("/message/add-message", { ...obj, 'collection': 'messages' }, config);
}

export const deleteMessage = (obj) => {
    return axiosMyProvider.post("/message/delete-message" + req.params.id, { ...obj, 'collection': 'messages' }, config);
}
