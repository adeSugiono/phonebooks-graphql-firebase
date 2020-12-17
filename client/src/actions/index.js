import axios from 'axios';


const request = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// start load phonebooks data
export const loadPhonebookSuccess = (phonebooks) => ({
    type: 'LOAD_PHONEBOOKS_SUCCESS',
    phonebooks
})

export const loadPhonebooksFailure = () => ({
    type: 'LOAD_PHONEBOOKS_FAILURE'
})

export const loadPhonebooks = () => {
    return dispatch => {
        return request.get('phonebooks')
            .then(function (response) {
                dispatch(loadPhonebookSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(loadPhonebooksFailure())
            });
    }
}
// end load phonebooks data

// start add phonebooks data
export const addPhonebookSuccess = (phonebooks) => ({
    type: 'ADD_PHONEBOOKS_SUCCESS',
    phonebooks
})

export const addPhonebooksFailure = (id) => ({
    type: 'ADD_PHONEBOOKS_FAILURE', id
})

const addPhonebooksRedux = (id, name, phone) => ({
    type: 'ADD_PHONEBOOKS', id, name, phone
})


export const addPhonebooks = (name, phone) => {
    const id = Date.now();
    return dispatch => {
        dispatch(addPhonebooksRedux(id, name, phone))
        return request.post('phonebooks', { id, name, phone })
            .then(function (response) {
                dispatch(addPhonebookSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(addPhonebooksFailure(id))
            });
    }
}

// start edit phonebooks data
export const editPhonebookSuccess = (phonebooks) => ({
    type: 'EDIT_PHONEBOOKS_SUCCESS',
    phonebooks
})

export const editPhonebooksFailure = (id) => ({
    type: 'EDIT_PHONEBOOKS_FAILURE', id
})

const editPhonebooksRedux = (id, name, phone) => ({
    type: 'EDIT_PHONEBOOKS', id, name, phone
})

export const editPhonebooks = (id, name, phone) => {
    return dispatch => {
        dispatch(editPhonebooksRedux(id, name, phone))
        return request.put(`phonebooks/${id}`, { name, phone })
            .then(function (response) {
                dispatch(editPhonebookSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(editPhonebooksFailure(id))
            });
    }
}

// start delete Phonebooks data
const deletePhonebooksRedux = (id) => ({
    type: 'DELETE_PHONEBOOKS', id
})

export const deletePhonebookSuccess = () => ({
    type: 'DELETE_PHONEBOOKS_SUCCESS'
})

export const deletePhonebooksFailure = () => ({
    type: 'DELETE_PHONEBOOKS_FAILURE'
})


export const deletePhonebooks = (id) => {
    return dispatch => {
        dispatch(deletePhonebooksRedux(id))
        return request.delete(`phonebooks/${id}`)
            .then(function (response) {
                dispatch(deletePhonebookSuccess())
            })
            .catch(function (error) {
                console.error(error);
                dispatch(deletePhonebooksFailure())
            });
    }
}

// end delete Phonebooks data

export const resendPhonebookSuccess = (id) => ({
    type: 'RESEND_PHONEBOOKS_SUCCESS',
    id
})

export const resendPhonebooksFailure = () => ({
    type: 'RESEND_PHONEBOOKS_FAILURE'
})

export const resendPhonebooks = (id, name, phone) => {
    return dispatch => {
        return request.post('phonebooks', { id, name, phone })
            .then(function (response) {
                dispatch(resendPhonebookSuccess(id))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(resendPhonebooksFailure())
            });
    }
}