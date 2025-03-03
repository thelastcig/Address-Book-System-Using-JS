const Contact = require("C:\\Users\\sonuc\\Desktop\\Java\\Node JS\\Address-Book-JS\\Address-Book\\src\\Contact.js");

function testValidContact() {
    try {
        let contact = new Contact("John", "Doe", "Main Street", "Springfield", "Illinois", "123456", "9876543210", "john.doe@example.com");
        console.log("Valid Contact Created:", contact);
    } catch (error) {
        console.error("Failed:", error.message);
    }
}

function testInvalidContacts() {
    const testCases = [
        { args: ["so", "shar", "Street", "City", "State", "123456", "9876543210", "test@example.com"], error: "First Name must start with a capital letter and have at least 3 characters." },
        { args: ["Sonu", "d", "Street", "City", "State", "123456", "9876543210", "test@example.com"], error: "Last Name must start with a capital letter and have at least 3 characters." },
        { args: ["Sonu", "Sharma", "St", "City", "State", "123456", "9876543210", "test@example.com"], error: "Address must have at least 4 characters." },
        { args: ["Sonu", "Sharma", "Street", "NY", "State", "123456", "9876543210", "test@example.com"], error: "City must have at least 4 characters." },
        { args: ["Sonu", "Sharma", "Street", "City", "St", "123456", "9876543210", "test@example.com"], error: "State must have at least 4 characters." },
        { args: ["Sonu", "Sharma", "Street", "City", "State", "12345", "9876543210", "test@example.com"], error: "Invalid Zip format." },
        { args: ["Sonu", "Sharma", "Street", "City", "State", "123456", "98765432", "test@example.com"], error: "Invalid Phone format." },
        { args: ["Sonu", "Sharma", "Street", "City", "State", "123456", "9876543210", "invalid-email"], error: "Invalid Email format." }
    ];

    for (let i = 0; i < testCases.length; i++) {
        try {
            new Contact(...testCases[i].args);
            console.error(`Test ${i + 1} failed: Expected error but got success.`);
        } catch (error) {
            if (error.message === testCases[i].error) {
                console.log(`Test ${i + 1} passed: ${error.message}`);
            } else {
                console.error(`Test ${i + 1} failed: Expected "${testCases[i].error}" but got "${error.message}"`);
            }
        }
    }
}

console.log("\nRunning Valid Contact Test:");
testValidContact();

console.log("\nRunning Invalid Contact Tests:");
testInvalidContacts();
