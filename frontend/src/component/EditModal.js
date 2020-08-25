import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditForm from './EditForm'
import CreateIcon from '@material-ui/icons/Create';

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
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditModal(props) {

    const {handleUpdate} = props

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Update {props.row.name} </h2>
            <div id="simple-modal-description">
                {/* {console.log(props.row)} */}
                <EditForm row={props.row} handleUpdate={props.handleUpdate} handleClose={handleClose}/>
            </div>
        </div>
    );

    return (
        <div>
        <Button variant="contained" color="primary" type="button" onClick={handleOpen} startIcon={<CreateIcon />}>
            Update
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </div>
    );
}