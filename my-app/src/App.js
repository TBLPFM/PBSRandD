// import React, { useState } from 'react';
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import 'ag-grid-enterprise';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// //bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// const App = () => {
//     const [gridApi, setGridApi] = useState(null);
//     const [gridColumnApi, setGridColumnApi] = useState(null);
//     // const onButtonClick = e => {
//     //   const selectedNodes = gridApi.getSelectedNodes()
//     //   const selectedData = selectedNodes.map( node => node.data )
//     //   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
//     //   alert(`Selected nodes: ${selectedDataStringPresentation}`)
//     // }
//     const [rowData, setRowData] = useState([
//         {make: "Toyota", model: "Celica", price: 35000},
//         {make: "Ford", model: "Mondeo", price: 32000},
//         {make: "Porsche", model: "Boxter", price: 72000}
//     ]);

//     return (
//         <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
//             <AgGridReact
//                 rowData={rowData}>
//                 <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
//                 <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
//                 <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
//             </AgGridReact>
//         </div>
//     );
// };

// export default App;

import React from 'react';
import './App.css';
//ag-Grid
import { AgGridReact,AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

 

class App extends React.Component {
  //initialize array variable
  constructor(props) {

    //super is used to access the variables to parent classes
    super(props);

    //ag-Grid columns and rows defining
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true,editable:true
      }, {
        headerName: "Model", field: "model", sortable: true, filter: true
      }, {
        headerName: "Price", field: "price", sortable: true, filter: true
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }]
    }
  }

  //ag-Grid hook ready
  onGridReady = params => {
    this.gridApi = params.api;
    
  };

  //ag-Grid add new row functions
  onAddRow = () => {
    
    this.gridApi.updateRowData({
      add: [{ make: 'BMW', model: 'S2', price: '63000' }]
      , addIndex:0 });
}
 
  
render() {

  //output for browser
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Reactjs ag-Grid Add New Row</h1>
      <button className="btn btn-primary mb-3" onClick={this.onAddRow}>Add Row</button>
      <div
        className="ag-theme-alpine"
        style={{
        height: '350px',
        width: '603px' }}
      >
        <AgGridReact
          onGridReady={this.onGridReady}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
               <AgGridColumn field="make" rowGroup={true} editable={true}></AgGridColumn>
              <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>

        </AgGridReact>
    </div>
  </div>
  );
  
}

}
export default App;