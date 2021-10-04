const initialState = {
    ContactList: [
        // {
        //   Id: uuidv4(),
        //   Name: "Anton Karton",
        //   Phone: "+1-800-600-9898",
        //   Email: "ak@gmain.com",
        //   Status: "Work",
        //   Gender: "men",
        //   Image: 0
        // },
        // {
        //   Id: uuidv4(),
        //   Name: "Karton Anton",
        //   Phone: "+1-800-700-9898",
        //   Email: "ka@gmain.com",
        //   Status: "Friends",
        //   Gender: "men",
        //   Image: 1
        // },
        // {
        //   Id: uuidv4(),
        //   Name: "Anna Lee",
        //   Phone: "+1-800-800-9898",
        //   Email: "al@gmain.com",
        //   Status: "Private",
        //   Gender: "women",
        //   Image: 0
        // },
        // {
        //   Id: uuidv4(),
        //   Name: "Olga Verdnam",
        //   Phone: "+1-800-900-9898",
        //   Email: "ov@gmain.com",
        //   Status: "Family",
        //   Gender: "women",
        //   Image: 1
        // }
    ],
    CurrentContact: null,
    SearchString: ""
}

const ContactListReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_ADD":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_DELETE":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_STATUS_CHANGE":
            return {
                ...state,
                ContactList: action.payload
            }
        case "CONTACT_GET":
            return {
                ...state,
                CurrentContact: action.payload
            }
        case "CONTACT_UPDATE":
            return {
                ...state,
                ContactList: action.payload
            }
        case "SEARCH_STRING_UPDATE":
            return {
                ...state,
                SearchString: action.payload
            }
        default:
            return state;
    }
}

export default ContactListReducer;