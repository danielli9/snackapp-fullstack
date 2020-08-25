// App.js

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import SimpleTable from './component/SimpleTable'
import SimpleModal from './component/SimpleModal'

import SnackDataService from './service/SnackDataService';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tablerows: [],
    }

    this.deleteSnackClicked = this.deleteSnackClicked.bind(this)
    this.refreshSnacks = this.refreshSnacks.bind(this)
  }

  componentDidMount() {
    this.refreshSnacks();
  }

  refreshSnacks() {
    SnackDataService.retrieveAllSnacks()
      .then(
        response => {
          // console.log(response);
          this.setState({ tablerows: response.data })
        }
      )
  }

  deleteSnackClicked(id) {
    SnackDataService.deleteSnack(id)
        .then(
            response => {
                this.refreshSnacks()
            }
        )
  }

  // state = {

  //   tablerows: [

  //     createData('Cupcake', 1000, 3.7, 67, 4.3),
  //     createData('Donut', 452, 25.0, 51, 4.9),
  //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //     createData('Eclair', 262, 16.0, 24, 6.0),
  //     createData('Gingerbread', 356, 16.0, 49, 3.9),
  //     createData('Honeycomb', 408, 3.2, 87, 6.5),
  //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
  //     createData('KitKat', 518, 26.0, 65, 7.0),
  //     createData('Lollipop', 392, 0.2, 98, 0.0),
  //     createData('Marshmallow', 318, 0, 81, 2.0),
  //     createData('Nougat', 360, 19.0, 9, 37.0),
  //     createData('Oreo', 437, 18.0, 63, 4.0)
  //   ],

  //   // tablerows: axios.get(ALL_SNACKS_URL)

  // }

  removeIceCream = (index, sortedA) => {  

    this.deleteSnackClicked(sortedA[index].id)

    this.setState({
      tablerows: sortedA.filter((tablerows, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = tr => {
    console.log(tr);
    SnackDataService.addSnack(tr);
    this.setState({tablerows: [...this.state.tablerows, tr]});
  }

  handleUpdate = (oldRow, newRow) => {
    SnackDataService.updateSnack(newRow.id, newRow);
    var index = this.state.tablerows.indexOf(oldRow);
    this.state.tablerows[index] = newRow;
    this.setState({tablerows: this.state.tablerows});
  }

  render() {

    return (
      <div>
        <Navbar />
        {/* <MaterialTableComp /> */}

        <SimpleModal handleSubmit={this.handleSubmit}/>
        <SimpleTable rows={this.state.tablerows} removeIceCream={this.removeIceCream} handleUpdate={this.handleUpdate} setSorted={this.setSorted}/>

        {/* <Form handleSubmit={this.handleSubmit} /> */}


      </div>
    )
  }
}

export default App;