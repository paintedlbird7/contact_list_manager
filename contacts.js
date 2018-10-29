console.log("Welcome to your contacts manager!");
do {
    console.log("1: List contacts");
    //console.log("2: Add a contact");
    console.log("0: Quit");


    var Contact = {
        //initialize the contact
        init: function (last, first) {
            this.last = last;
            this.first = first;
        },
        //Describe of contacts
        describe: function () {
            var description = "Last name: " + this.last + ", first name: " + this.first;
            return description;
        }
    };
    // Creates contact
    var contact1 = Object.create(Contact);
    contact1.init("Smith", "John");

    var contact2 = Object.create(Contact);
    contact2.init("Doe", "Jane");

    // Pushes the contacts
    var contacts = [];
    contacts.push(contact1);
    contacts.push(contact2);

    // Lists the contacts
    function listContact() {
        contacts.forEach(function (contact) {
            console.log(contact.describe());
        });
    }
    // Prompts user to enter digit
    var nmbr = prompt("Enter your digit(1 or 2): ");
    var choice = parseInt(nmbr);
    switch (choice) {
        case 1:
            console.log("Here`s the list of all your contacts: ");
            listContact();
            break;
        default:
            break;
    }
}
while (choice != 0);
