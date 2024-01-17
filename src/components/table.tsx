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
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Date of Birth',
        accessorKey: 'dateOfBirth',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Street',
        accessorKey: 'addressStreet',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'City',
        accessorKey: 'addressCity',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'State',
        accessorKey: 'addressState',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Zip Code',
        accessorKey: 'addressZip',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',
            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Start Date',
        accessorKey: 'startDate',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
      {
        header: 'Departement',
        accessorKey: 'employeeDepartment',
        muiTableHeadCellProps: {
          style: {
            minWidth: '2rem',
            maxWidth: '10rem',

            verticalAlign: 'inherit',
          },
        },
        enableResizing: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: allEmployees,
    enableRowSelection: false,
    enableGlobalFilter: true,
    enableColumnResizing: true,
    enableColumnFilters: false,
    enableColumnActions: false,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: false,
    layoutMode: 'semantic',
    displayColumnDefOptions: {
      'mrt-row-actions': {
        size: 350,
        muiTableHeadCellProps: {
          align: 'center',
        },
      },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
