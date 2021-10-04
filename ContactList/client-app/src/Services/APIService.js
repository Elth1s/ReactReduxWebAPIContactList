import { Component } from "react";

class APIService extends Component {
    apiContacts = "/api/Contacts/";

    async fetchContactList() {
        const List = await fetch(`${this.apiContacts}get-contacts`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data == null) {
                    return {
                        List: []
                    }
                } else {
                    return {
                        List: data
                    }
                }
            }).catch(err => console.log(err))
        return List;
    }

    async addContact(Contact) {
        await fetch(`${this.apiContacts}add-contact`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Contact)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    async deleteContact(Id) {
        await fetch(`${this.apiContacts}delete-contact/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    async updateContact(Contact) {
        console.log(Contact)
        await fetch(`${this.apiContacts}update-contact`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Contact)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

}

const apiservice = new APIService();
export default apiservice;
