// import React from 'react';
import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class BasicTextFields extends Component {
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
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, calories, fat, carbs, protein } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <TextField 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} 
                    label="Name" />

                <TextField 
                    type="text" 
                    name="calories" 
                    id="calories"
                    value={calories} 
                    onChange={this.handleChange} 
                    label="Calories" />                
                    
                <TextField 
                    type="text" 
                    name="fat" 
                    id="fat"
                    value={fat} 
                    onChange={this.handleChange} 
                    label="Fat" />                
                    
                <TextField 
                    type="text" 
                    name="carbs" 
                    id="carbs"
                    value={carbs} 
                    onChange={this.handleChange} 
                    label="Carbs" />                
                    
                <TextField 
                    type="text" 
                    name="protein" 
                    id="protein"
                    value={protein} 
                    onChange={this.handleChange} 
                    label="Protein" />

                {/* <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} /> */}
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default BasicTextFields;

// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Name" />
//       <TextField id="standard-basic" label="Calories" />
//       <TextField id="standard-basic" label="Fat" /> 
//       <TextField id="standard-basic" label="Carbs" /> 
//       <TextField id="standard-basic" label="Protien" /> 
//       {/* <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
//     </form>
//   );
// }