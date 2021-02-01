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

export const updateMessage = (id, obj) => {
    return axiosMyProvider.post("/message/update-message" + id, obj, config);
}

export const addMessage = (obj) => {
    return axiosMyProvider.post("/message/add-message", { ...obj, 'collection': 'messages' }, config);
}

export const deleteMessage = (id, obj) => {
    return axiosMyProvider.post("/message/delete-message/" + id, { ...obj, 'collection': 'messages' }, config);
}
