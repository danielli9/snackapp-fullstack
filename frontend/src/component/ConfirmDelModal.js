import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 2),
    },

    buttons: {
        margin: '5px',
    },
}));

export default function ConfirmDelModal(props) {

    const {handleDelete} = props

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseDel = () => {
        props.handleDelete();
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Are you sure you want to delete LOREM IPSUM?</h2>
        <p id="simple-modal-description">
        <div align="center">
            <Button className={classes.buttons} variant="contained" color="primary" onClick={handleCloseDel}>
                Yes
            </Button >

            <Button className={classes.buttons} variant="contained" color="secondary" onClick={handleClose}>
                No
            </Button >
        </div>
        </p>
        </div>
    );

    return (
        <div>
        <Button variant="contained" color="secondary" type="button" onClick={handleOpen} startIcon={<DeleteIcon />}>
            DELETE
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={classes.modal}>
                {body}
            </div>
        </Modal>
        </div>
    );
}