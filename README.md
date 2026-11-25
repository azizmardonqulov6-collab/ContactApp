# Contact Manager

A simple command-line Contact Management System built with **Node.js**. This application allows users to manage their contacts directly from the terminal.

## Features

- **Add Contact** – Add a new contact with personal information.
- **Show All Contacts** – Display all saved contacts.
- **Update Contact** – Edit existing contact information.
- **Delete Contact** – Remove a contact from the contact list.
- **Search Contact** – Find contacts by name or phone number.
- **Exit** – Close the application.

## Technologies Used

- Node.js
- JavaScript
- File System (`fs` module)
- JSON
- Readline / Terminal Input

## Project Structure

```text
ContactManager/
│
├── data/
│   └── contacts.json
│
├── app.js
├── utels.js
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/USERNAME/ContactManager.git
```

### 2. Navigate to the project directory

```bash
cd ContactManager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
node app.js
```

## How to Use

After running the application, you will see the following menu:

```text
Contact Manager

1. Add Contact
2. Show All Contacts
3. Update Contact
4. Delete Contact
5. Search Contact
6. Exit
```

Enter a number to select an operation.

### Example

```text
Choose an option: 1

Enter name: Aziz
Enter phone: 998901234567

Contact added successfully!
```

## Data Storage

All contacts are stored locally in a JSON file:

```text
data/contacts.json
```

The application uses Node.js File System methods to read and write contact information.

## Learning Goals

This project was created to practice:

- Node.js fundamentals
- JavaScript arrays and objects
- Functions and modules
- JSON parsing and serialization
- File System operations
- CRUD operations (Create, Read, Update, Delete)
- Command-line application development

## Future Improvements

- Add email addresses to contacts.
- Validate phone numbers.
- Prevent duplicate contacts.
- Add sorting functionality.
- Improve the command-line interface.

## Author

**Aziz Mardonqulov**

GitHub: [@azizmardonqulov6-collab](https://github.com/azizmardonqulov6-collab)

---

*This project is part of my Node.js learning journey.*
