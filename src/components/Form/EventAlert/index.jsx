import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { forwardRef, useState } from 'react';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EventAlert() {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={160000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide}>
            <Alert onClose={handleClose} icon={<ReportProblemIcon fontSize="inherit" />} severity="error" sx={{ width: '100%' }}>
                Preencha os campos obragatórios.
            </Alert>
        </Snackbar>
    )
}