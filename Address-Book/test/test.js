const Contact = require("../src/Contact");
const AddressBook = require("../src/AddressBook");

let addressBook = new AddressBook();

console.log("\nAdding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Sonu", "Sharma", "Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "9876543210", "sonu.sharma@example.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Saurabh", "Sharma", "New Colony", "Patna", "Bihar", "654321", "8765432109", "saurabh.sharma@example.com");
    addressBook.addContact(contact2);

    console.log("\nAll Contacts:");
    console.log(addressBook.getAllContacts());

    console.log("\nTotal Contacts:", addressBook.countContacts());
} catch (error) {
    console.error("Error:", error.message);
}


console.log("\n🗑️ Deleting Contact:");
try {
    addressBook.deleteContact("Sonu", "Sharma");

    console.log("\nContacts After Deletion:");
    console.log(addressBook.getAllContacts());

    console.log("\nTotal Contacts After Deletion:", addressBook.countContacts());
} catch (error) {
    console.error("Error:", error.message);
}
