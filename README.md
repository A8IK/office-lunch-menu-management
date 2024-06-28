**Technologies Used:**
Frontend: React.js, Axios
Backend: Node.js, Express.js, PostgreSQL, pg-promise
Styling: CSS
Other Tools: React Router DOM, Axios

**Features:**
Admin can add menus for office lunches.
Employees can view available menus and place their choices.
Admin can view the choices made by employees.

**Database Schema:**
The PostgreSQL database schema consists of three main tables:
*Users
1.`id` (Primary Key): Unique indentifier for user login.
2.`user_type`: Select user is Admin or Employee.
3.`password`: Character varying user password.
*Menus
1.`date`: Date of the menu.
2.`options`: Available options for the menu.
*Choices
1.`user_id`: ID of the user placing the choice.
2.`employee_name`: Name of the employee placing the choice.
3.`choices`: Array of choices made by the employee.

**Setup Instructions:**
Backend:
1.Clone the repository.
2.Navigate to the office-lunch-backend directory.
3.Run npm install to install dependencies.
4.Set up the PostgreSQL database and configure the connection in the database.js file.
5.Run npm start to start the backend server.
Frontend:
1.Navigate to the office-lunch-frontend directory.
2.Run npm install to install dependencies.
3.Update the API base URL in the api.js file if necessary.
4.Run npm start to start the frontend development server.
Login:
Since theres no create account options so mannually I give some user data in database(e.g. 
 id       user_type     password 
-------  ------------   ----------
1234  |    Admin      |  123456
456   |    Employee    |  54321
789   |    Employee    |  56789
1011  |    Employee    |  98765

Properly using this info can login easily.)

**Running the Projects:**
**Backend: After following the setup instructions, the backend server will be running on port 3000 by default.
**Frontend: After following the setup instructions, the frontend development server will be running on port 3000 by default. Access the application by visiting http://localhost:3000 in your browser.
