import { createSlice } from '@reduxjs/toolkit';

interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  startDate: Date;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  employeeDepartment: string;
}

interface EmployeesState {
  list: Employee[];
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
  } as EmployeesState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export const selectEmployees = (state: { employees: EmployeesState }) =>
  state.employees.list;

export default employeesSlice.reducer;
