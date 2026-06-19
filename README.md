Objective
Build a React application to manage employees with Create, Read, Update, and Delete (CRUD) functionality.
Requirements
1. Dashboard Page
Display a list of employees in a table.
Columns:
* Employee ID
* Name
* Email
* Department
* Designation
* Joining Date
* Actions (Edit/Delete)
2. Add Employee
Create a form with the following fields:
* Full Name
* Email
* Phone Number
* Department (Dropdown)
* Designation
* Joining Date
Validation:
* All fields are required.
* Email format validation.
* Phone number must be 10 digits.
3. Edit Employee
* Clicking Edit should open a form with existing data.
* User can update employee details.
4. Delete Employee
* Show confirmation before deletion.
* Remove employee from the list.
5. Search & Filter
Implement:
* Search by employee name.
* Filter by department.
6. Data Persistence
Use:
localStorage
Store employee records in localStorage so data remains after page refresh.
7. Responsive UI
* Mobile friendly.
* Tablet friendly.
* Desktop friendly.
Technical Requirements
React Concepts
* Functional Components
* Hooks (useState, useEffect)
* Props
* Conditional Rendering
* Suggested Folder Structure
* * Export employee list to CSV.
* Add employee profile image upload.
* Implement sorting by name and joining date.
* Use Context API instead of prop drilling.
src/
├── components/
│ ├── EmployeeForm.jsx
│ ├── EmployeeTable.jsx
│ ├── SearchBar.jsx
│ └── ConfirmModal.jsx
├── pages/
│ └── Dashboard.jsx
├── hooks/
│ └── useLocalStorage.js
├── utils/
│ └── validation.js
├── App.jsx
└── main.jsx
