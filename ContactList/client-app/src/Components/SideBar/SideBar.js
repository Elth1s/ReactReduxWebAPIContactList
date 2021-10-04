import { connect } from "react-redux";
import SideBarSearch from "./SideBarSearch/SideBarSearch";

const SideBar = ({ ContactList }) => {
    let CalculateCountOfCategory = (Status) => {
        const tmpList = ContactList.slice();
        let statuses = tmpList.filter(contact => contact.Status === Status)
        return statuses.length;
    }
    return (
        <div className="col-3 mr-0">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{ContactList.length}</span></div>
                <div className="list">
                    <SideBarSearch />
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success text-center pl-0">Work</div><span>{CalculateCountOfCategory("Work")}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary text-center pl-0">Family</div><span>{CalculateCountOfCategory("Family")}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger text-center pl-0">Private</div><span>{CalculateCountOfCategory("Private")}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning text-center pl-0">Friends</div><span>{CalculateCountOfCategory("Friends")}</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { ContactList } = ContactListReducer;
    return { ContactList }
}

export default connect(mapStateToProps)(SideBar);