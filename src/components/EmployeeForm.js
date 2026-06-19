import { useState, useEffect } from "react";
// import { validateEmployee } from "../utils/validation";
import { validateEmployee } from "../utils/validation.js";
import '../components/EmployeeForm.css';

function EmployeeForm({
  addEmployee,
  updateEmployee,
  selectedEmployee
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    joiningDate: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateEmployee(formData);

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    if (selectedEmployee) {
      updateEmployee(formData);
    } else {
      addEmployee(formData);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      joiningDate: ""
    });

    setErrors({});
  };

  // image code-------------------
  const handleImageUpload = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData({
      ...formData,
      image: reader.result
    });
  };

  reader.readAsDataURL(file);
};

  return (
    <form className="employee_form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && (
  <p className="error">
    {errors.name}
  </p>
)}

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
  <p className="error">
    {errors.email}
  </p>
)}

      <input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && (
  <p className="error">
    {errors.phone}
  </p>
)}

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">
          Select Department
        </option>

        <option>HR</option>
        <option>IT</option>
        <option>Sales</option>
      </select>
      {errors.department && (
  <p className="error">
    {errors.department}
  </p>
)}

      <input
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleChange}
      />
      {errors.designation && (
  <p className="error">
    {errors.designation}
  </p>
)}

      <input
        type="date"
        name="joiningDate"
        value={formData.joiningDate}
        onChange={handleChange}
      />
      {errors.joiningDate && (
  <p className="error">
    {errors.joiningDate}
  </p>
)}
<input
 type="file"
 accept="image/*"
 onChange={handleImageUpload}
/>

      <button type="submit">
        {selectedEmployee
          ? "Update"
          : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;