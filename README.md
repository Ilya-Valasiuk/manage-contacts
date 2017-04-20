# manage-contacts
Develop API which should provide endpoints to manage contacts.

# To start
1) clone repo
2) cd repo
3) sh ./start/sh

**Note: docker must be installed.**

# API
  - GET - http://localhost:3000/contacts - list of all contacts;
  - GET - http://localhost:3000/contacts/:contactId - get contact data;
  - GET - http://localhost:3000/contacts/page/:pageNumber - pagination;
  - POST - http://localhost:3000/contacts - create new contact. Required fields - *name* and *phoneNumber*.
  ```
  {
    "name": "Nill",
    "phoneNumber": "+375297777777"
  }
  ```
  - PUT - http://localhost:3000/contacts/:contactId - edit contact data.
  - DELETE - http://localhost:3000/contacts/:contactId - remove contact info.
  - POST - http://localhost:3000/history - craete history for call. Required fields - *contactId* and *time*.
  ```
  {
	"contactId": "58f4a9743bb78e95452d78f4",
	"time": "2"
}
  ```
  - GET - http://localhost:3000/history/:contactId - get call history for *contactID*;
  - DELETE - http://localhost:3000/history/:contactId - remove history for *contactID*.
  
  # Need to do  
  - [ ] finish unit tests
  - [ ] prepare mock data/switch to remote db
  - [ ] documentation
  - [x] docker
  - [ ] load balancer
