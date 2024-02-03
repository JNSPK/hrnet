import '../styles/createEmployee.css';
import DatePickerCustom from './datePicker';
import CustomSelect from './select';
import { useTheme } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import Modal from '@jnspk/reactmodal';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { PickerOnChangeFn } from '@mui/x-date-pickers/internals/hooks/useViews';
import { UsePickerValueBaseProps } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';

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

  type SelectChangeEvent = {
    target: {
      innerText: string;
    };
  };
  type SubmitEvent = {
    preventDefault: () => void;
  };

  type ChangeEvent = {
    target: {
      name: string;
      value: string;
    };
  };
  interface Params {
    type: string;
    name: string;
  }

  const handleChangeDate = (event: DateChangeEvent, params: Params) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [params.name]: event.format('MM/DD/YYYY'),
    }));
    return;
  };

  const handleChangeSelect = (event: SelectChangeEvent, params: Params) => {
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
    console.log(event.target);
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log(formData);
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
                    handleChangeDate(event, {
                      type: 'datePicker',
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
                  aria-label='state'
                  onChange={(event) => {
                    handleChangeSelect(event, {
                      type: 'select',
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
                    handleChangeDate(event, {
                      type: 'datePicker',
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
                      type: 'select',
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

// const CreateEmployee: React.FC<CreateEmployeeProps> = () => {
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     control,
//     formState: { errors },
//   } = useForm<Employee>();

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const handleDateChange = (name: string, date: Date) => {
//     setValue(name, date);
//   };

//   const onSubmit = (data: Employee) => {
//     dispatch(addEmployee(data));
//     openModal();
//   };

//   return (
//     <section className='createEmployee'>
//       <div
//         className='createEmployee-container'
//         style={{
//           backgroundColor: theme.palette.secondary.main,
//         }}>
//         <h1 className='createEmployee-title'>Create Employee</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className='createEmployee-form-container'>
//             <section className='civil-section'>
//               <fieldset className='civil-status'>
//                 <legend>Civil Status</legend>
//                 <div>
//                   <label htmlFor='firstName'>First name:</label>
//                   <input
//                     type='text'
//                     id='firstName'
//                     {...register('firstName', {
//                       required: 'First name is required',
//                     })}
//                     placeholder='First name'
//                   />
//                   {errors.firstName && <span>{errors.firstName.message}</span>}
//                 </div>
//                 <div>
//                   <label htmlFor='lastName'>Last name:</label>
//                   <input
//                     type='text'
//                     id='lastName'
//                     {...register('lastName', {
//                       required: 'Last name is required',
//                     })}
//                     placeholder='Last name'
//                   />
//                   {errors.lastName && <span>{errors.lastName.message}</span>}
//                 </div>
//                 <Controller
//                   name='dateOfBirth'
//                   control={control}
//                   render={({ field }) => (
//                     <DatePickerCustom
//                       {...field}
//                       label='Date of Birth'
//                       onDateChange={(date) =>
//                         handleDateChange('dateOfBirth', date)
//                       }
//                     />
//                   )}
//                 />
//               </fieldset>
//             </section>

//             <section className='address-section'>
//               <fieldset className='address'>
//                 <legend>Address</legend>
//                 <div>
//                   <label htmlFor='street'>Street:</label>
//                   <input
//                     type='text'
//                     id='street'
//                     {...register('addressStreet', {
//                       required: 'Street is required',
//                     })}
//                     placeholder='Street'
//                   />
//                   {errors.addressStreet && (
//                     <span>{errors.addressStreet.message}</span>
//                   )}
//                 </div>
//                 <div>
//                   <label htmlFor='city'>City:</label>
//                   <input
//                     type='text'
//                     id='city'
//                     {...register('addressCity', {
//                       required: 'City is required',
//                     })}
//                     placeholder='City'
//                   />
//                   {errors.addressCity && (
//                     <span>{errors.addressCity.message}</span>
//                   )}
//                 </div>
//                 <CustomSelect
//                   theme={theme}
//                   options={state}
//                   placeholder='State'
//                   id='dropdown-state'
//                   aria-label='state'
//                   {...register('addressState', {
//                     required: 'State is required',
//                   })}
//                 />
//                 {errors.addressState && (
//                   <span>{errors.addressState.message}</span>
//                 )}
//                 <div>
//                   <label htmlFor='zip'>Zip Code:</label>
//                   <input
//                     type='text'
//                     id='zip'
//                     {...register('addressZip', {
//                       required: 'Zip Code is required',
//                     })}
//                     placeholder='Zip Code'
//                     inputMode='numeric'
//                     pattern='[0-9]{5}'
//                   />
//                   {errors.addressZip && (
//                     <span>{errors.addressZip.message}</span>
//                   )}
//                 </div>
//               </fieldset>
//             </section>

//             <section className='hiring-section'>
//               <fieldset className='hiring-info'>
//                 <legend>Hiring infos</legend>
//                 <DatePickerCustom
//                   label='Start Date'
//                   onDateChange={(date) => handleDateChange('startDate', date)}
//                 />
//                 <CustomSelect
//                   theme={theme}
//                   options={departement}
//                   placeholder='Department'
//                   id='dropdown-departement'
//                   aria-label='department'
//                   {...register('employeeDepartment', {
//                     required: 'Department is required',
//                   })}
//                 />
//                 {errors.employeeDepartment && (
//                   <span>{errors.employeeDepartment.message}</span>
//                 )}
//               </fieldset>
//             </section>
//           </div>
//           <Button
//             type='submit'
//             id='save-btn'
//             style={{
//               border: 'solid 1px',
//               borderColor: theme.palette.secondary.contrastText,
//               color: theme.palette.secondary.contrastText,
//             }}
//             sx={{
//               '&:hover': {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.secondary.contrastText,
//               },
//             }}>
//             Save
//           </Button>
//         </form>
//       </div>
//       {isOpen && (
//         <Modal isOpen={isOpen} setIsOpen={setIsOpen} options={modalOptions} />
//       )}
//     </section>
//   );
// };

// export default CreateEmployee;
