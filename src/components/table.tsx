import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useMemo } from 'react';
import '../styles/listEmployees.css';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../redux/employeesSlice';

interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  addressStreet: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  startDate: Date;
  employeeDepartment: string;
}

const Table = () => {
  const allEmployees = useSelector(selectEmployees);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'First Name',
        accessorKey: 'firstName',
        enableHiding: false,
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
      {
        header: 'Date of Birth',
        accessorKey: 'dateOfBirth',
      },
      {
        header: 'Street',
        accessorKey: 'addressStreet',
      },
      {
        header: 'City',
        accessorKey: 'addressCity',
      },
      {
        header: 'State',
        accessorKey: 'addressState',
      },
      {
        header: 'Zip Code',
        accessorKey: 'addressZip',
      },
      {
        header: 'Start Date',
        accessorKey: 'startDate',
      },
      {
        header: 'Departement',
        accessorKey: 'employeeDepartment',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: allEmployees,
    enableRowSelection: false, //enable some features
    enableGlobalFilter: true, //turn off a feature
    enableColumnResizing: true,
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
