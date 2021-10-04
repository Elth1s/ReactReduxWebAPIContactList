import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Import Actions
import { updateSearchString } from "../../../Actions/ContactListActions"

const MainSearch = ({ updateSearchString }) => {
    let onGetSearchString = (e) => {
        updateSearchString(e.target.value)
    }
    return (

        <div className="px-0">
            <div className="contacts-list-search input-group">
                <input type="text" className="col-8" placeholder="Search" onChange={onGetSearchString} />
                <Link to="/add-new-contact" className="add-contact col-2 offset-1">Add Contact</Link>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    updateSearchString
}

export default connect(null, mapDispatchToProps)(MainSearch);
