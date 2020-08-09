import React, { Component } from 'react';

import './App.css';
import Tabletop from 'tabletop';
import Table from 'react-bootstrap/Table'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1mHgz4qu3O4twjA_xwnsIvuk3td5XKi75M-xPgjWglFk',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
    
      <div className="App">
        
    
        
        <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                              <th>Nama Sales</th>
                              <th>Kode Dokter</th>
                              <th>Waktu</th>
                              <th>Tanggal</th>
                              <th>Status</th>
                          </tr>
                        </thead>
        </Table>
         <div id="book-details">
          {
            data.map(obj => {
              return (
                     
        
        
        
                      <Table striped bordered hover responsive>

                        <tbody>
                          <tr>
                            <td>{obj.Sales}</td>
                            <td>{obj.Dokter}</td>
                            <td>{obj.Waktu}</td>
                            <td>{obj.Tanggal}</td>
                            <td>{obj.Status}</td>
                          </tr>
                          
                        </tbody>
                      </Table>
             )
            })
          }
        <script type="text/javascript" src="js/materialize.min.js"></script>
        </div>

      </div>

    );
  }
}

export default App;