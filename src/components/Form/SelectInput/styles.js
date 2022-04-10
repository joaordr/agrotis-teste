import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const Container = styled.div`
    .MuiSelect-select {
        .MuiFormHelperText-root {
            display: none;            
        }
    }

    .Mui-error{
        display: flex;
        svg {
            font-size: 15px;
            margin-right: 5px;
            margin-top: 1px;
        }
    }
`;

export const ClearButton = MuiStyled(IconButton)(() => ({
    zIndex: 1,
    position: 'absolute',
    right: '25px',
    top: '17px'
}))

export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
        },
    },
};