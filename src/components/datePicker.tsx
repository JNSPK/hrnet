import { FC } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../styles/datePicker.css';

interface DatePickerCustomProps {
  label: string;
}

const DatePickerCustom: FC<DatePickerCustomProps> = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className='datePicker' label={label} name='datePicker' />
    </LocalizationProvider>
  );
};

export default DatePickerCustom;
