import "./SearchBar.css";
function SearchBar({
  search,
  setSearch,
  department,
  setDepartment
}) {
  return (
    <>
    <div className="filter-container" >
      <input className="search_input"
        placeholder="Search Employee"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select  className="department_select"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      >
        <option value="">
          All Departments
        </option>

        <option>HR</option>
        <option>IT</option>
        <option>Sales</option>
      </select>
      </div>
    </>
  );
}

export default SearchBar;