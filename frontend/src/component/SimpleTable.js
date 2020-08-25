// import React from 'react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

import SimpleTableHead from './SimpleTableHead'
import ConfirmDelModal from './ConfirmDelModal'
import EditModal from './EditModal'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
}));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Donut', 452, 25.0, 51, 4.9),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Honeycomb', 408, 3.2, 87, 6.5),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Jelly Bean', 375, 0.0, 94, 0.0),
//     createData('KitKat', 518, 26.0, 65, 7.0),
//     createData('Lollipop', 392, 0.2, 98, 0.0),
//     createData('Marshmallow', 318, 0, 81, 2.0),
//     createData('Nougat', 360, 19.0, 9, 37.0),
//     createData('Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  // console.log(stabilizedThis);
  return stabilizedThis.map((el) => el[0]);
}

SimpleTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    // numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    // onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

// class SimpleTable extends Component {
//   render() {

//     // const { rows } = this.props

//     const classes = useStyles();
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('calories');

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };  
    
//     return (
//         <Paper className={classes.paper}>
//             <TableContainer>
//                 <Table className={classes.table} aria-label="enhanced table">
//                     <SimpleTableHead
//                         classes={classes}
//                         order={order}
//                         orderBy={orderBy}
//                         onRequestSort={handleRequestSort}
//                         rowCount={rows.length}
//                     />

//                     <TableBody>
//                         {stableSort(rows, getComparator(order, orderBy))
//                             .map((row, index) => {
//                                 return (
//                                     <TableRow hover key={row.name} >
//                                         <TableCell component="th" scope="row" padding="none">
//                                             {row.name}
//                                         </TableCell>
//                                         <TableCell align="right">{row.calories}</TableCell>
//                                         <TableCell align="right">{row.fat}</TableCell>
//                                         <TableCell align="right">{row.carbs}</TableCell>
//                                         <TableCell align="right">{row.protein}</TableCell>
//                                     </TableRow>
//                                 );
//                         })}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Paper>
//     );
//   }
// }

// export default SimpleTable

export default function SimpleTable(props) {

  const {rows, removeIceCream, handleUpdate} = props

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
      // console.log(property);
  };  
  
  return (
      <Paper className={classes.paper}>
          <TableContainer>
              <Table className={classes.table} aria-label="enhanced table">
                  <SimpleTableHead
                      classes={classes}
                      order={order}
                      orderBy={orderBy}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                  />

                  <TableBody>
                      {
                        stableSort(rows, getComparator(order, orderBy))
                          .map((row, index) => {
                              return (
                                  <TableRow hover key={index} >
                                      <TableCell component="th" scope="row" padding="none">
                                          {row.name}
                                      </TableCell>
                                      <TableCell align="right">{row.calories}</TableCell>
                                      <TableCell align="right">{row.fat}</TableCell>
                                      <TableCell align="right">{row.carbs}</TableCell>
                                      <TableCell align="right">{row.protein}</TableCell>

                                      <TableCell align="right">{index}</TableCell>
                                      <td>
                                        {/* <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} 
                                          onClick={() => props.removeIceCream(index, stableSort(rows, getComparator(order, orderBy)))}>
                                          Delete
                                        </Button > */}
                                        <ConfirmDelModal handleDelete = {() => props.removeIceCream(index, stableSort(rows, getComparator(order, orderBy)))}/>
                                        <EditModal row={row} handleUpdate={props.handleUpdate}/>
                                      </td>
                                  </TableRow>
                              );
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
      </Paper>
  );
}
