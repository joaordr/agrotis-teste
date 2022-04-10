import { styled as MuiStyled } from '@mui/material/styles';
import { FormHelperText } from '@mui/material';

export const CharacterCounter = MuiStyled(FormHelperText)(() => ({
    textAlign: 'right'
}));