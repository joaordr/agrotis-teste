import { forwardRef } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DoneIcon from '@mui/icons-material/Done';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EventAlert({ eventNotice, setEventNotice }) {
    function handleClose() {
        setEventNotice({ isOpen: false, isError: eventNotice.isError });
    };

    return (
        <Snackbar sx={{ width: 450 }} open={eventNotice.isOpen} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide}>
            {eventNotice.isError ? (
                <Alert sx={{ width: '100%' }} onClose={handleClose} icon={<ReportProblemIcon fontSize="inherit" />} severity="error">
                    Preencha os campos obrigatórios.
                </Alert>
            ) : (
                <Alert sx={{ width: '100%' }} onClose={handleClose} icon={<DoneIcon fontSize="inherit" />} severity="success">
                    Cadastro realizado com sucesso!
                </Alert>
            )}
        </Snackbar>
    )
}