import { useState } from 'react';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ptLocale from 'date-fns/locale/pt';

export default function DatePickerInput({ label, id }) {
    const [value, setValue] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
            <DatePicker
                label={label}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} label={label} required={true} id={id} variant="standard" fullWidth color="success" />}
            />
        </LocalizationProvider>
    )
}