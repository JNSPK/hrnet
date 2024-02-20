import '../styles/createEmployee.css';
import DatePickerCustom from './datePicker';
import CustomSelect from './select';
import { useTheme } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import Modal from '@jnspk/reactmodal';
import { useState } from 'react';

interface CreateEmployeeProps {}

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

const modalOptions = {
  message: 'Employee successfully created !',
  boxStyle: {
    width: '30rem',
    height: '15rem',
    boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
  },
  closeStyle: {
    borderRadius: '50%',
    boxShadow: '0px 10px 10px -3px rgba(0,0,0,0.1)',
    top: '1rem',
    right: '1rem',
  },
  fade: true,
};

const CreateEmployee: React.FC<CreateEmployeeProps> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    startDate: '',
    employeeDepartment: '',
  });

  type DateChangeEvent = {
    format: (arg0: string) => void;
  };

  type SubmitEvent = React.FormEvent<HTMLFormElement>;

  type ChangeEvent = {
    target: {
      name: string;
      value: string;
    };
  };
  interface Params {
    name: string;
  }

  const handleChangeDate = (event: DateChangeEvent, params: Params) => {
    if (event) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [params.name]: event.format('MM/DD/YYYY'),
      }));
    }
    return;
  };

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    params: Params
  ) => {
    if (event) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [params.name]: event.target.innerText,
      }));

      return;
    }
  };
  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    dispatch(addEmployee(formData));
    openModal();
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <DatePickerCustom
                  label='Date of Birth'
                  onChange={(event) => {
                    //@ts-expect-error: event don't have any format method here
                    handleChangeDate(event, {
                      name: 'dateOfBirth',
                    });
                  }}
                />
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
                  name='addressStreet'
                  placeholder='Street'
                  required
                  onChange={handleChange}
                />
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='city'
                  name='addressCity'
                  placeholder='City'
                  required
                  onChange={handleChange}
                />
                <CustomSelect
                  theme={theme}
                  options={state}
                  placeholder='State'
                  id='dropdown-state'
                  aria-label='state button'
                  onChange={(event) => {
                    handleChangeSelect(event, {
                      name: 'addressState',
                    });
                  }}
                  name='addressState'
                />
                <input
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                  type='text'
                  id='zip'
                  placeholder='Zip Code'
                  name='addressZip'
                  inputMode='numeric'
                  pattern='[0-9]{5}'
                  required
                  onChange={handleChange}
                />
              </fieldset>
            </section>
            <section className='hiring-section'>
              <fieldset className='hiring-info'>
                <legend>Hiring infos</legend>
                <DatePickerCustom
                  label='Start Date'
                  onChange={(event) => {
                    //@ts-expect-error: event don't have any format method here
                    handleChangeDate(event, {
                      name: 'startDate',
                    });
                  }}
                />
                <CustomSelect
                  theme={theme}
                  options={departement}
                  placeholder='Department'
                  id='dropdown-departement'
                  aria-label='department'
                  onChange={(event) => {
                    handleChangeSelect(event, {
                      name: 'employeeDepartment',
                    });
                  }}
                  name='employeeDepartment'
                />
              </fieldset>
            </section>
          </div>
          <Button
            type='submit'
            id='save-btn'
            style={{
              border: 'solid 1px',
              borderColor: theme.palette.secondary.contrastText,
              color: theme.palette.secondary.contrastText,
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
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} options={modalOptions} />
      )}
    </section>
  );
};

export default CreateEmployee;
