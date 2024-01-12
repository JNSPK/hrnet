import '../styles/createEmployee.css';
import DatePickerCustom from './datePicker';
import CustomSelect from './select';
import { useTheme } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';

interface CreateEmployeeProps {}

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

const state = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
const departement = [
  'Sales',
  'Marketing',
  'Engineering',
  'Human Resources',
  'Legal',
];

const CreateEmployee: React.FC<CreateEmployeeProps> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const dateOfBirth = form.datePicker[0].value;
    const addressStreet = form.street.value;
    const addressCity = form.city.value;
    const addressState = form[9]?.innerHTML;
    const addressZip = form.zip.value;
    const startDate = form.datePicker[1].value;
    const employeeDepartment = form[16]?.innerHTML;

    const newEmployee: Employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      employeeDepartment,
    };

    dispatch(addEmployee(newEmployee));
    console.log(form);

    form.reset();
    console.log('success :', newEmployee);
  };

  return (
    <section className='createEmployee'>
      <div
        className='createEmployee-container'
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}>
        <h1 className='createEmployee-title'>Create Employee</h1>

        <form onSubmit={handleSubmit}>
          <div className='createEmployee-form-container'>
            <section className='civil-section'>
              <fieldset className='civil-status'>
                <legend>Civil Status</legend>
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='firstName'
                  name='firstName'
                  placeholder='First name'
                  required
                />
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='Last name'
                  required
                />
                <DatePickerCustom label='Date of Birth' />
              </fieldset>
            </section>
            <section className='address-section'>
              <fieldset className='address'>
                <legend>Address</legend>
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='street'
                  name='street'
                  placeholder='Street'
                  required
                />
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='city'
                  name='city'
                  placeholder='City'
                  required
                />
                <CustomSelect
                  theme={theme}
                  options={state}
                  placeholder='State'
                  id='dropdown-state'
                />
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='zip'
                  placeholder='Zip Code'
                  name='zip'
                  inputMode='numeric'
                  pattern='[0-9]{5}'
                  required
                />
              </fieldset>
            </section>
            <section className='hiring-section'>
              <fieldset className='hiring-info'>
                <legend>Hiring infos</legend>
                <DatePickerCustom label='Start Date' />
                <CustomSelect
                  theme={theme}
                  options={departement}
                  placeholder='Department'
                  id='dropdown-departement'
                />
              </fieldset>
            </section>
          </div>

          <Button
            type='submit'
            id='save-btn'
            style={{
              border: 'solid 1px',
              borderColor: theme.palette.primary.main,
            }}
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.contrastText,
              },
            }}>
            Save
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateEmployee;
