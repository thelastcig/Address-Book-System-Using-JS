const Contact = require("../src/Contact.js");
const AddressBook = require("../src/AddressBook.js");

let addressBook = new AddressBook();

console.log("\nAdding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Sonu", "Sharma", "Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "9876543210", "sonu.sharma@example.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Saurabh", "Sharma", "New Colony", "Patna", "Bihar", "654321", "8765432109", "saurabh.sharma@example.com");
    addressBook.addContact(contact2);

    console.log("\nAll Contacts:");
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}


console.log("\nTesting Invalid Contact (Should Fail):");
try {
    let invalidContact = new Contact("Jo", "S", "St", "NY", "US", "12345", "98765", "invalid@");
    addressBook.addContact(invalidContact);
} catch (error) {
    console.error("Expected Error:", error.message);
}
