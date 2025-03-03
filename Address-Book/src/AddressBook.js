const Contact = require("./Contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            let isDuplicate = this.contacts.some(
                (c) => c.firstName === contact.firstName && c.lastName === contact.lastName
            );

            if (isDuplicate) {
                throw new Error(`Contact ${contact.firstName} ${contact.lastName} already exists.`);
            }

            this.contacts.push(contact);
            console.log("Contact Added:", contact);
        } else {
            throw new Error("Invalid Contact Type");
        }
    }

    getAllContacts() {
        return this.contacts;
    }

    editContact(firstName, lastName, updatedContact) {
        let index = this.contacts.findIndex(
            (contact) => contact.firstName === firstName && contact.lastName === lastName
        );

        if (index === -1) {
            throw new Error(`Contact ${firstName} ${lastName} not found.`);
        }

        if (!(updatedContact instanceof Contact)) {
            throw new Error("Invalid Contact Update.");
        }

        this.contacts[index] = updatedContact;
        console.log(`Contact ${firstName} ${lastName} updated successfully.`);
    }

    deleteContact(firstName, lastName) {
        let index = this.contacts.findIndex(
            (contact) => contact.firstName === firstName && contact.lastName === lastName
        );

        if (index === -1) {
            throw new Error(`Contact ${firstName} ${lastName} not found.`);
        }

        this.contacts.splice(index, 1);
        console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
    }

    countContacts() {
        return this.contacts.length;
    }

    searchByCityOrState(location) {
        return this.contacts.filter(
            (contact) => contact.city === location || contact.state === location
        );
    }

    viewByCityOrState(groupBy) {
        return this.contacts.reduce((result, contact) => {
            let key = groupBy === "city" ? contact.city : contact.state;
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(contact);
            return result;
        }, {});
    }

    countByCityOrState(groupBy) {
        return this.contacts.reduce((result, contact) => {
            let key = groupBy === "city" ? contact.city : contact.state;
            result[key] = (result[key] || 0) + 1;
            return result;
        }, {});
    }

    sortByField(field) {
        const validFields = ["city", "state", "zip"];
        if (!validFields.includes(field)) {
            throw new Error(`Invalid field. Sort by 'city', 'state', or 'zip' only.`);
        }

        return this.contacts.slice().sort((a, b) => a[field].localeCompare(b[field]));
    }
}

module.exports = AddressBook;
