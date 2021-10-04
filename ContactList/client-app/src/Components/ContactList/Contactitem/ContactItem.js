import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Import API Service
import APIService from "../../../Services/APIService"


// Import Actions
import { changeStatus, deleteContact, getCurrentContact } from "../../../Actions/ContactListActions"


const ContactItem = ({ Id, Name, Image, Status, Phone, Email, Gender, ContactList, changeStatus, deleteContact, getCurrentContact }) => {
    let onDeleteContact = () => {
        const index = ContactList.findIndex(elem => elem.Id === Id);
        const tmpList = ContactList.slice();
        tmpList.splice(index, 1);
        deleteContact(tmpList);
        APIService.deleteContact(Id);
    }
    let onChangeStatus = () => {
        const index = ContactList.findIndex(elem => elem.Id === Id);
        let contact = ContactList[index];
        switch (contact.Status) {
            case 'Work':
                contact.Status = "Family";
                break;
            case 'Family':
                contact.Status = "Private";
                break;
            case 'Private':
                contact.Status = "Friends";
                break;
            case 'Friends':
                contact.Status = "Work";
                break;
            default:
                console.log(`Error`);
                break;
        }
        const tmpList = ContactList.slice();
        tmpList[index] = contact;
        changeStatus(tmpList);
        APIService.updateContact(contact);
    }
    let onGetCurrentContact = () => {
        const index = ContactList.findIndex(elem => elem.Id === Id);
        const contact = ContactList[index];
        getCurrentContact(contact)
    }
    let statusBackground;
    switch (Status) {
        case 'Work':
            statusBackground = "lab lab-success";
            break;
        case 'Family':
            statusBackground = "lab lab-primary";
            break;
        case 'Private':
            statusBackground = "lab lab-danger";
            break;
        case 'Friends':
            statusBackground = "lab lab-warning";
            break;
        default:
            console.log(`Sorry, we are out of ${Status}.`);
            break;
    }
    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={img} alt="avatar" className="avatar" /> <div>{Name}<br /><span onClick={onChangeStatus} className={statusBackground}>{Status}</span></div>
                </div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className="icons">
                <Link to="/edit-contact" className="text-dark"><i className="fas fa-edit fa-lg" onClick={onGetCurrentContact}></i></Link>
                <i onClick={onDeleteContact} className="fas fa-trash fa-lg"></i>
            </div>

        </div>
    )
}
const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList } = ContactListReducer;
    return { ContactList }
}
const mapDispatchToProps = {
    deleteContact,
    getCurrentContact,
    changeStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

