# Contact Book 📗
This project is a simple Full Stack app for managing your contacts. It contains an API developed with Node.js and PostgreSQL and a frontend developed in Angular using Nebular which is deployed using Nginx. The whole app can be deployed using Docker (especially Docker compose). 
## Goal of the project
The main goal of this project is to show how: 
- Docker compose works
- Node.js and PostgreSQL can be used to store and retrieve data
- Angular can be used along with the UI Kit Nebular
- an Angular app can be deployed using Nginx

## Getting Started 🚀
### Prerequisites
- Git installed
- Docker installed
- Docker compose installed

Moreover, I recommend using Linux Ubuntu 20.04, since that was my setup when developing this project. However, this project should work platform-independent, assuming a proper configuration.

### Steps
1. Open a terminal and clone the repository
2. Switch into the _contact-book_ directory
3. Run `docker-compose up` in your terminal
4. The contact book app should now be up and running 😄

How to access the app:
- Frontend: `localhost:4200`
- Backend: `localhost:8080`

## API endpoints ⚙
- `GET /contact`: lists all contacts
- `GET /contact/:id`: lists a specific contact
- `POST /contact`: creates a new contact
  - Payload: { name: _name_, age: _age_ }
- `PUT /contact/:id`: updates a specific contact
  - Payload: { name: _name_, age: _age_ }
- `DELETE /contact/:id`: deletes a specific contact