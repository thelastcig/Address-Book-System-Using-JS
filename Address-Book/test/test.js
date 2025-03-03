const Contact = require("../src/Contact");
const AddressBook = require("../src/AddressBook");

let addressBook = new AddressBook();

console.log("\nAdding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Sonu", "Sharma", "Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "9876543210", "sonu.sharma@example.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Saurabh", "Sharma", "New Colony", "Patna", "Bihar", "654321", "8765432109", "saurabh.sharma@example.com");
    addressBook.addContact(contact2);

    let contact3 = new Contact("Amit", "Kumar", "Sector 5", "Bhopal", "Madhya Pradesh", "789456", "9123456780", "amit.kumar@example.com");
    addressBook.addContact(contact3);

    console.log("\nAll Contacts:");
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

console.log("\nSearching for contacts in Bhopal:");
console.log(addressBook.searchByCityOrState("Bhopal"));

console.log("\nSearching for contacts in Madhya Pradesh:");
console.log(addressBook.searchByCityOrState("Madhya Pradesh"));

console.log("\nSearching for contacts in Delhi:");
console.log(addressBook.searchByCityOrState("Delhi"));
