import MainSearch from "./MainSearch/MainSearch";
import ContactList from "../ContactList/ContactList"
import SideBar from "../SideBar/SideBar";

const Main = () => {

    // state = {
    //     List: this.props.List,
    //     onChangeStatus: this.props.onChangeStatus,
    //     onDeleteContact: this.props.onDeleteContact,
    //     onGetCurrentContact: this.props.onGetCurrentContact,
    //     SearchString: ""
    // }

    // CalculateCountOfCategory = (Status) => {
    //     const tmpList = this.state.List.slice();
    //     let statuses = tmpList.filter(contact => contact.Status === Status)
    //     return statuses.length;
    // }

    // UpdateSearchString = (searchString) => {
    //     this.setState({
    //         SearchString: searchString
    //     });
    // }

    // Search = () => {
    //     const tmpList = this.state.List.slice();
    //     let searchedContacts = tmpList.filter(contact => contact.Name.includes(this.state.SearchString));
    //     return searchedContacts;
    // }

    return (
        <div className="container" >
            <div className="row">
                <SideBar />
                <div className="col-9 pr-0">
                    <div className="contacts-list">
                        <h5 className="title">Contact List</h5>
                        <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                            <MainSearch />
                            <div className="unit head">
                                <div className="field name">
                                    <div className="check">
                                        <input id="cb1" name="cb1" type="checkbox" />
                                        <label htmlFor="cb1"></label>
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                                    Name
                                </div>
                                <div className="field phone">
                                    Phone
                                </div>
                                <div className="field email icons">
                                    Email
                                </div>
                                <div>
                                </div>
                            </div>
                            <ContactList />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;