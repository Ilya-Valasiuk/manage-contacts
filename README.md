# manage-contacts
Develop API which should provide endpoints to manage contacts.

# To start
1) clone repo
2) cd repo
3) sh ./install.sh
4) sh ./start/sh

**Note: mongod must be started on default port.**

# API
  - GET - http://localhost:3000/contacts - list of all contacts;
  - GET - http://localhost:3000/contacts/page/:pageNumber - pagination
  - POST - http://localhost:3000/contacts - create new contact. Required fields - *name* and *phoneNumber*.
  Example:
  ```
  {
    "name": "Nill",
    "phoneNumber": "+375297777777"
  }
  ```
  - PUT - http://localhost:3000/contacts/:contactId - edit contact data.
  - DELETE - http://localhost:3000/contacts/:contactId - remove contact info.
  - POST - http://localhost:3000/history - craete history for call. Required fields - *contactId* and *time*
  Example:
  ```
  {
	"contactId": "58f4a9743bb78e95452d78f4",
	"time": "2"
}
  ```
  - GET - http://localhost:3000/history/:contactId - get call history for *contactID*
  - DELETE - http://localhost:3000/history/:contactId - remove history for *contactID*
  
  # Need to do  
  - [ ] finish unit tests
  - [ ] documentation
  - [ ] docker
  - [ ] load balancer
