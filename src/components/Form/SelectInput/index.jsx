import { cloneElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { FormHelperText } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Controller } from "react-hook-form";

import { ClearButton, Container } from './styles';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
        },
    },
};

export default function SelectInput({ children, control, rules, ...props }) {
    return (
        <Container>
            <Controller
                name={props.id}
                control={control}
                defaultValue=''
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <FormControl fullWidth variant="standard" color="success">
                        {value !== '' && <ClearButton type="button" onClick={() => onChange('')}><CloseIcon fontSize="small" /></ClearButton>}
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
                        {(props.id === 'infosPropriedade' && value !== '') ?
                            <FormHelperText>CNPJ {JSON.parse(value).cnpj}</FormHelperText>
                            :
                            <>{(props.id === 'laboratorio' && !!error) ?
                                <FormHelperText error><ReportProblemIcon /> Error</FormHelperText>
                                :
                                <FormHelperText> </FormHelperText>
                            }</>
                        }
                    </FormControl>
                )}
            />
        </Container>
    )
}