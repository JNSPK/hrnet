import { FC } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../styles/datePicker.css';

interface DatePickerCustomProps {
  label: string;
  onChange: () => void;
}

const DatePickerCustom: FC<DatePickerCustomProps> = ({ label, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className='datePicker'
        label={label}
        name='datePicker'
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default DatePickerCustom;
