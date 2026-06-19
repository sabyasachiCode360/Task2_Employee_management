import { useState } from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import ConfirmModal from "../components/ConfirmModal";

import useLocalStorage from "../hooks/useLocalStorage";
import { exportToCSV }  from "../utils/exportCSV";
import { useContext } from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
import { EmployeeContext } from "../context/EmployeeContext.js";

function Dashboard() {
  const [employees, setEmployees] =
    useLocalStorage("employees", []);

  const [selectedEmployee,
    setSelectedEmployee] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [department,
    setDepartment] =
    useState("");

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now()
      }
    ]);
  };

  const updateEmployee = (
    updatedEmployee
  ) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id
          ? updatedEmployee
          : emp
      )
    );

    setSelectedEmployee(null);
  };

  const deleteEmployee = (id) => {
    const confirmDelete =
      window.confirm(
        "Delete Employee?"
      );

    if (confirmDelete) {
      setEmployees(
        employees.filter(
          (emp) => emp.id !== id
        )
      );
    }
  };

  const filteredEmployees =
    employees.filter((emp) => {
      const matchName =
        emp.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchDept =
        department === "" ||
        emp.department === department;

      return (
        matchName && matchDept
      );
    });

    const [showModal, setShowModal] =
  useState(false);

const [employeeToDelete,
  setEmployeeToDelete] =
  useState(null);

  const handleDeleteClick = (id) => {
  setEmployeeToDelete(id);
  setShowModal(true);
};

const confirmDelete = () => {
  setEmployees(
    employees.filter(
      (emp) => emp.id !== employeeToDelete
    )
  );

  setShowModal(false);
};

const cancelDelete = () => {
  setShowModal(false);
};

// sorting by name and data-----------------------


const [sortOrder, setSortOrder] =useState("");


const [dateSort, setDateSort] = useState("")

const sortedEmployees = [...filteredEmployees];

if (sortOrder === "asc") {
  sortedEmployees.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

if (sortOrder === "desc") {
  sortedEmployees.sort((a, b) =>
    b.name.localeCompare(a.name)
  );
}

if (dateSort === "newest") {
  sortedEmployees.sort(
    (a, b) =>
      new Date(b.joiningDate) -
      new Date(a.joiningDate)
  );
}

if (dateSort === "oldest") {
  sortedEmployees.sort(
    (a, b) =>
      new Date(a.joiningDate) -
      new Date(b.joiningDate)
  );
}



  return (
    <>
      <h1 className="header_text">
        Employee Management System
      </h1>

      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        selectedEmployee={
          selectedEmployee
        }
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
      />

      {/* <EmployeeTable
        employees={filteredEmployees}
        onEdit={
          setSelectedEmployee
        }
        onDelete={
          deleteEmployee
        }
      /> */}

      <EmployeeTable
  employees={sortedEmployees}
  onEdit={setSelectedEmployee}
  onDelete={handleDeleteClick}
/>

      <ConfirmModal
  isOpen={showModal}
  message="Are you sure you want to delete this employee?"
  onConfirm={confirmDelete}
  onCancel={cancelDelete}
/>
<div className="table-controls">
<button className="export-btn"
 onClick={() =>
  exportToCSV(employees)
 }
>
 Export CSV
</button>

{/* for sorting----- */}

<select  className="sort-select"
  value={sortOrder}
  onChange={(e) =>
    setSortOrder(e.target.value)
  }
>
  <option value="">Sort</option>
  <option value="asc">A-Z</option>
  <option value="desc">Z-A</option>
</select>

<select  className="sort-select"
  value={dateSort}
  onChange={(e) =>
    setDateSort(e.target.value)
  }
>
  <option value="">
    Date Sort
  </option>

  <option value="newest">
    Newest
  </option>

  <option value="oldest">
    Oldest
  </option>
</select>

</div>



    </>
  );
}

export default Dashboard;