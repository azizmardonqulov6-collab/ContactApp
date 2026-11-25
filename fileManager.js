const fs = require("fs");
const eventEmiter = require("events");
const emiter = new eventEmiter();
const contactsJson = fs.readFileSync("./data/contacts.json", "utf-8");

const contactData = JSON.parse(contactsJson);

const contacts = (() => 
{
	return contactData;
})
const addContact = ((newData) =>
{	let contactData = fs.readFileSync("./data/contacts.json" , "utf-8");
	contactData = JSON.parse(contactData);
	if (!Array.isArray(contactData)) {
        throw new Error("contacts.json ichidagi ma'lumot massiv emas!");
    }
	let addData = contactData.push(...newData);
	add = JSON.stringify(contactData);

	fs.writeFileSync("./data/contacts.json", add );
	
	console.log("Malumot Contact larga qo'shildi");
})

module.exports = {contacts , addContact} ;

