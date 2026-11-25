const fs = require("fs");
const {contacts , addContact}  = require("./fileManager");
let data = contacts();
class Comands {
	allContacts()
	{
		if(data.length === 0 ){
			console.log("COntactlar mavjud emas");
		}
		console.log("id                      Ism                   raqam              email");

		for(let i = 0; i < data.length; i++){
			console.log(`${data[i].id}         ${data[i].name}          ${data[i].phone}        ${data[i].email} ` );
		}
	}
	addData(name , phone , email)
	{

		const Data =[{
			id: Date.now(),
			name: name,
			phone: phone,
			email: email
		}];
		addContact(Data);
	}
	deliteCon(tel)
	{	
		let index;

		for(let i = 0 ; i < data.length ; i++){
			if(data[i].phone === tel){
				index = data[i].phone;
			}
		} 
		console.log(index);
		
		if(!index) {
			console.log("Kontact mavjud emas");
		}else{
			let dataCon = data.splice(index , 1);
                	data = JSON.stringify(data , null , 2);
               		fs.writeFileSync("./data/contacts.json" , data );
			console.log("Kontact O'chirildi.");
		}
	}
	updateCon(phone ,name , email , newPhone)
	{
		console.log(phone , name , email , newPhone);
		    for(let i = 0 ; i < data.length ; i++){
                        if(data[i].phone == phone){
                                data[i].name = name ? name : data[i].name;
                                data[i].phone = newPhone ? newPhone : data[i].phone;
                                data[i].email = email ? email : data[i].email;
                                data = JSON.stringify(data , null , 2);
                                fs.writeFileSync("./data/contacts.json" , data);
                                console.log("Kontact O'rgartirildi");

                        }
                }
	}
	searchCon(name){
		let searchContact; 
		for(let i = 0 ; i < data.length ; i++){
			if(data[i].name == name){
				searchContact = data[i];
			}	
		}
		if(searchContact){
			console.log("id              Ism        raqam              email");
			console.log(`${searchContact.id}    ${searchContact.name}     ${searchContact.phone}              ${searchContact.email}`);

		}else{
			console.log("Kotakt mavjud emas");
		}
	}
}

module.exports = Comands;
