import "./EmployeeTable.css";
function EmployeeTable({
  employees,
  onEdit,
  onDelete
}) {
  return (
    <div className="table-container">
    <table className="tableInfo">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Joining Date</th>
          <th>Photo</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.designation}</td>
            <td>{emp.joiningDate}</td>
            <td>
  <img
    src={emp.image}
    alt={emp.name}
    width="50"
  />
</td>

            <td>
              <button
                onClick={() =>
                  onEdit(emp)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(emp.id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default EmployeeTable;