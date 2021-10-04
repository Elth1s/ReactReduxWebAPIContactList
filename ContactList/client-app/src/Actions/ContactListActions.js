export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList
    }
}

export const addContact = (contactList) => {
    return {
        type: "CONTACT_ADD",
        payload: contactList
    }
}

export const deleteContact = (contactList) => {
    return {
        type: "CONTACT_DELETE",
        payload: contactList
    }
}

export const changeStatus = (contactList) => {
    return {
        type: "CONTACT_STATUS_CHANGE",
        payload: contactList
    }
}

export const getCurrentContact = (contact) => {
    return {
        type: "CONTACT_GET",
        payload: contact
    }
}

export const changeContact = (contactList) => {
    return {
        type: "CONTACT_UPDATE",
        payload: contactList
    }
}

export const updateSearchString = (searchString) => {
    return {
        type: "SEARCH_STRING_UPDATE",
        payload: searchString
    }
}
