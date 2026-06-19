import {createContext, useState }  from "react";
// import { useState } from "react";

export const EmployeeContext =
 createContext();

function EmployeeProvider({
 children
}) {

 const [employees,
  setEmployees] =
  useState([]);

 return (
  <EmployeeContext.Provider
   value={{
    employees,
    setEmployees
   }}
  >
   {children}
  </EmployeeContext.Provider>
 );
}

export default EmployeeProvider;