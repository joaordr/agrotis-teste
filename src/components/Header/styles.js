import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const PageHeader = MuiStyled(AppBar)(() => ({
    background: 'var(--background-header)',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.26)'
}));

export const Logo = styled.img`
    width: 110px;
    margin: 15px auto;
`;