import { styled as MuiStyled } from '@mui/material/styles';
import { AppBar, Paper, Button, MenuItem } from '@mui/material';

export const FormContainer = MuiStyled(Paper)(() => ({
    maxWidth: '1200px',
    margin: '40px auto',
    borderRadius: '0'
}));

export const FormHeader = MuiStyled(AppBar)(() => ({
    background: 'var(--background-form-header)',
    boxShadow: 'none',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '9px 15px',
}));

export const SubmitButton = MuiStyled(Button)(() => ({
    color: '#fff',
    '&:hover': {
        backgroundColor: 'var(--background-form-button-hover)',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.26)',
    },
    padding: '8px 16px 6px 16px',
    borderRadius: '2px'
}));

export const CustomOption = MuiStyled(MenuItem)(() => ({
    display: 'flex',
    flexDirection: 'column',
    'p': {
        width: '100%',
        '& + p': {
            marginTop: '-3px'
        }
    }
}));