import { cloneElement, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { FormHelperText } from '@mui/material';

import styles from './selectInput.module.scss';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
        },
    },
};

export default function SelectInput({ children, label, id }) {
    const [value, setValue] = useState('');

    return (
        <FormControl variant="standard" fullWidth color="success" required={true}>
            {value !== '' && <button type="button" onClick={() => setValue('')} className={styles.clearButton}><CloseIcon fontSize="small" /></button>}
            <InputLabel id={label.replace(/ /g, "").toLowerCase()}>{label}</InputLabel>
            <Select
                labelId={label.replace(/ /g, "").toLowerCase()}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                MenuProps={MenuProps}
            >
                {children.map((component) => cloneElement(component))}
            </Select>
            {(value !== '' && 'cnpj' in value) ? <FormHelperText>CNPJ {value.cnpj}</FormHelperText> : <FormHelperText> </FormHelperText>}
        </FormControl>
    )
}