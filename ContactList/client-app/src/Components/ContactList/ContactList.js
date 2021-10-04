import { useEffect } from "react";
import { connect } from "react-redux";

// Import API Service
import APIService from "../../Services/APIService"


// Import Actions
import { getAllContacts } from "../../Actions/ContactListActions"

// Import Components
import ContactItem from "./Contactitem/ContactItem";

const ContactList = ({ ContactList, SearchString, getAllContacts }) => {

    useEffect(() => {
        APIService.fetchContactList().then(currentListData => {
            getAllContacts(currentListData.List);
        })
    }, [])

    let Search = () => {
        const tmpList = ContactList.slice();
        if (SearchString != "") {
            let searchedContacts = tmpList.filter(contact => contact.Name.includes(SearchString));
            return searchedContacts;
        } else {
            return tmpList;
        }
    }

    const item = Search().map(listItem => {
        return <ContactItem key={listItem.Id} {...listItem} />
    })

    return (
        <div>{item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}</div>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList, SearchString } = ContactListReducer;
    return { ContactList, SearchString }
}

const mapDispatchToProps = {
    getAllContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);