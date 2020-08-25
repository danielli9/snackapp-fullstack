import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textfield: {
        margin: '5px',
        width: 'auto',
    },

    buttons: {
        margin: '5px',
    },
});

class Form extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            calories: '',
            fat: '',
            carbs: '',
            protein: ''

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleClose();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    handleClose = (event) => {
        event.preventDefault();
        
        this.props.handleClose();
    }

    render() {
        const { name, calories, fat, carbs, protein } = this.state; 

        const {classes} = this.props;

        return (
            <form onSubmit={this.onFormSubmit}>
                <TextField 
                    className={classes.textfield}
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} 
                    label="Name" />

                <TextField 
                    className={classes.textfield}
                    type="number" 
                    name="calories" 
                    id="calories"
                    value={calories} 
                    onChange={this.handleChange} 
                    label="Calories" />                
                    
                <TextField 
                    className={classes.textfield}
                    type="number" 
                    name="fat" 
                    id="fat"
                    value={fat} 
                    onChange={this.handleChange} 
                    label="Fat" />                
                    
                <TextField 
                    className={classes.textfield}
                    type="number" 
                    name="carbs" 
                    id="carbs"
                    value={carbs} 
                    onChange={this.handleChange} 
                    label="Carbs" />                
                    
                <TextField
                    className={classes.textfield}
                    type="number" 
                    name="protein" 
                    id="protein"
                    value={protein} 
                    onChange={this.handleChange} 
                    label="Protein" />
                <br></br>

                <div align="right">
                    <Button className={classes.buttons} variant="contained" color="primary" type="submit">
                        Submit
                    </Button >

                    <Button className={classes.buttons} variant="contained" color="secondary" onClick={this.handleClose}>
                        Cancel
                    </Button >                    
                </div>


            </form>
        );
    }
}

export default withStyles(styles)(Form);
