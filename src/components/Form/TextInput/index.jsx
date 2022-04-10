import { FormControl, TextField } from '@mui/material';
import { Controller } from "react-hook-form";

import { CharacterCounter } from './styles';

export default function TextInput({ control, rules, ...props }) {
    return (
        <Controller
            name={props.id}
            control={control}
            defaultValue=''
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <FormControl variant="standard" fullWidth>
                    <TextField
                        variant="standard"
                        color="success"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        {...props}
                    />
                    <CharacterCounter error={!!error}>{`${value.length}/${rules.maxLength}`}</CharacterCounter>
                </FormControl>
            )}
        />
    )
}