const readline = require("readline/promises");
const Comands = require("./utels.js");

const comands = new Comands();

const menuText =
  "\nContent Manager\n" +
  "1. Add Contact\n" +
  "2. Show All Contacts\n" +
  "3. Update Contact\n" +
  "4. Delete Contact\n" +
  "5. Search Contact\n" +
  "6. or any number. Exit\n";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    console.log(menuText);

    const rawCode = await rl.question("Boshqaruv Kamanda koddini kiriting: ");
    const managerCode = rawCode.trim();

    if (!managerCode || Number(managerCode) < 1 || Number(managerCode) > 6) {
      console.log("Exit");
      break;
    }

    switch (managerCode) {
      case "1": {
        const name = (await rl.question("Kontakt ismini kiriting: ")).trim();
        const phone = (await rl.question("Kontakt raqamini kiriting: ")).trim();
        const email = (await rl.question("Kontakt emailini kiriting: ")).trim();

         comands.addData(name, phone, email);
        break;
      }
      case "2":
        comands.allContacts();
        break;
      case "3":
        const raqam = (await rl.question("Yangilamoqchi bo'lgan kontakt nomerini kiriting: ")).trim();
	const name = (await rl.question("Yangi Kontaktga Nom Qo'ying: ")).trim();
        const email = (await rl.question("Yangi Kontaktga Email ni kiriting: ")).trim();
	const yangiRaqam = (await rl.question("Yangi kiritmoqchi bo'lgan raqamni kiriting: "));
     	comands.updateCon(raqam , name , email ,yangiRaqam);
	break;

      case "4":
	const phone = (await rl.question("O'chirmoqchi bo'lgan nomerni kiritingz: ")).trim();
  	  
	 comands.deliteCon(phone);
        break;

      case "5":
        const ism = (await rl.question("Kontakt ismini kiriting: ")).trim();
	comands.searchCon(ism);
        break;
    }
  }

  rl.close();
} 

main();
