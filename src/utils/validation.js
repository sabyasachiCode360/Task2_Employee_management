export const validateEmployee = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Invalid Email";
  }

  if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone must be 10 digits";
  }

  if (!data.department) {
    errors.department = "Department required";
  }

  if (!data.designation) {
    errors.designation = "Designation required";
  }

  if (!data.joiningDate) {
    errors.joiningDate = "Joining date required";
  }

  return errors;
};