import { cloneElement, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { FormHelperText } from '@mui/material';
import { Controller } from "react-hook-form";

import styles from './selectInput.module.scss';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
        },
    },
};

export default function SelectInput({ children, control, rules, ...props }) {
    return (
        <>
            <Controller
                name={props.id}
                control={control}
                defaultValue=''
                rules={rules}     
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <FormControl variant="standard" fullWidth color="success">
                        {value !== '' && <button type="button" onClick={() => onChange('')} className={styles.clearButton}><CloseIcon fontSize="small" /></button>}
                        <InputLabel error={!!error} id={props.label.replace(/ /g, "").toLowerCase()}>{props.label}</InputLabel>
                        <Select
                            labelId={props.label.replace(/ /g, "").toLowerCase()}
                            id={props.id}
                            value={value}
                            onChange={onChange}
                            MenuProps={MenuProps}
                            error={!!error}
                        >
                            {children.map((component) => cloneElement(component))}
                        </Select>
                        {(value !== '' && 'cnpj' in JSON.parse(value)) ? <FormHelperText>CNPJ {JSON.parse(value).cnpj}</FormHelperText> : <FormHelperText> </FormHelperText>}
                    </FormControl>
                )}
            />




        </>



    )
}