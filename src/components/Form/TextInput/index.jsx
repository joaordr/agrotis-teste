import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';

import styles from './textInput.module.scss';

export default function TextInput({ maxLength, ...props }) {
    const [name, setName] = useState('');

    return (
        <FormControl variant="standard" fullWidth>
            <TextField
                variant="standard"
                color="success"
                maxLength={maxLength}
                value={name}
                onChange={e => setName(e.target.value)}
                {...props}
            />
            <FormHelperText><span className={styles.character_counter}>{`${name.length}/${maxLength}`}</span></FormHelperText>
        </FormControl>
    )
}