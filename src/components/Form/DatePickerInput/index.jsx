import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ptLocale from 'date-fns/locale/pt';

import { Controller } from "react-hook-form";

export default function DatePickerInput({ control, rules, ...props }) {
    return (
        <Controller
            name={props.id}
            control={control}
            defaultValue=""
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
                    <DatePicker
                        label={props.label}
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => <TextField {...params} {...props} variant="standard" fullWidth color="success" error={!!error} />}
                    />
                </LocalizationProvider>
            )}
        />
    )
}