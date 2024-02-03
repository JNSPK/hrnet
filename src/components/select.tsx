import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import '../styles/select.css';
import { Theme } from '@mui/material';

interface CustomSelectProps {
  theme: Theme;
  options: string[];
  placeholder: string;
  id: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  theme,
  options,
  placeholder,
  id,
  onChange,
}) => {
  return (
    <Select
      style={{
        border: 'solid 1px',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
      defaultValue='none'
      placeholder={placeholder}
      id={id}
      onChange={onChange}>
      {options.map((item, index) => (
        <Option
          style={{
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
          }}
          key={index}
          value={index + 1}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
