import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:5000/graphql/'

const client = new ApolloClient({
    uri: API_URL
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
    const phonebooksQuery = gql`
    query {
      phonebooks{
        id
        name
        phone
      }
    }`;
    return dispatch => {
        return client.query({
            query: phonebooksQuery,
        })
            .then(function (response) {
                console.log(response);
                dispatch(loadPhonebookSuccess(response.data.phonebooks))
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
});

export const addPhonebooksFailure = (id) => ({
    type: 'ADD_PHONEBOOKS_FAILURE', id
});

const addPhonebooksRedux = (id, name, phone) => ({
    type: 'ADD_PHONEBOOKS', id, name, phone
})


export const addPhonebooks = (name, phone) => {
    const id = Date.now();
    const addQuery = gql`
    mutation addPhonebooks( $id: ID!, $name: String!, $phone: String!) {
      addPhonebooks( id: $id, name: $name, phone: $phone) {
        id
        name
        phone
      }
    }`;
    return dispatch => {
        dispatch(addPhonebooksRedux(id, name, phone))
        return client.mutate({
            mutation: addQuery,
            variables: {
                id,
                name,
                phone
            }
        })
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
    const updateQuery = gql`
    mutation updatePhonebooks($id: ID!, $name: String!, $phone: String!){
        updatePhonebooks(id: $id, name: $name, phone: $phone){
            id,
            name,
            phone
        }
    }`;
    return dispatch => {
        dispatch(editPhonebooksRedux(id, name, phone))
        return client.mutate({
            mutation: updateQuery,
            variables: {
                id,
                name,
                phone
            }
        })
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

export const deletePhonebookSuccess = (phonebooks) => ({
    type: 'DELETE_PHONEBOOKS_SUCCESS',
    phonebooks
})

export const deletePhonebooksFailure = () => ({
    type: 'DELETE_PHONEBOOKS_FAILURE'
})


export const deletePhonebooks = (id) => {
    const deleteQuery = gql`
    mutation removePhonebooks($id: ID!) {
      removePhonebooks(id: $id) {
        id
      }
    }`;
    return dispatch => {
        dispatch(deletePhonebooksRedux(id))
        return client.mutate({
            mutation: deleteQuery,
            variables: {
                id
            }
        })
            .then(function (response) {
                dispatch(deletePhonebookSuccess(response))
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
    const deleteQuery = gql`
    mutation updatePhonebooks($id: ID!, $name: String!, $phone: String!) {
      updatePhonebooks(id: $id, name: $name, phone: $phone) {
        id
        name
        phone
      }
    }`;
    return dispatch => {
        return client.mutate({
            mutation: deleteQuery,
            variables: {
                id,
                name,
                phone
            }
        })
            .then(function (response) {
                dispatch(resendPhonebookSuccess(response))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(resendPhonebooksFailure(id))
            });
    }
}