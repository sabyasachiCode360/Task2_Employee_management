export const exportToCSV = (employees) => {
  const headers = [
    "ID",
    "Name",
    "Email",
    "Department",
    "Designation",
    "Joining Date"
  ];

  const rows = employees.map(emp => [
    emp.id,
    emp.name,
    emp.email,
    emp.department,
    emp.designation,
    emp.joiningDate
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.join(","))
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv"
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "employees.csv";

  link.click();
};