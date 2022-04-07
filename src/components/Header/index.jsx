import AppBar from '@mui/material/AppBar';

import styles from './header.module.scss'

export default function Header() {
    return (
        <AppBar position="static" color="inherit">
            <img className={styles.logo} src="./images/logo.svg" alt="" />
        </AppBar>
    )
}