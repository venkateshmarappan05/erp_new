import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Modal from './modal';
import Alert from 'sweetalert2';

const headers = ['Name', 'Position', 'Office', 'Age', 'Start date'];
export default class BrandPage extends Component {
  state = {
    modal: false,
    edit: {},
    search: {}
  }
  modalOpen = () => {
    this.setState({ modal: true })
  }
  modalClose = () => {
    this.setState({ modal: false, edit: {} })
  }
  editData = data => {
    this.setState({ modal: true, edit: data })
  }
  searchItem = e => {
    e.preventDefault();
    console.log(e.target.name, e.target.value)
  }

  deleteData = e => {
    e.preventDefault();
    Alert.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Alert.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Alert.DismissReason.cancel) {
        Alert.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  render() {
    const { modal, edit } = this.state;
    return (
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Brand Lists</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-6  text-left">
                    <div className="dt-buttons btn-group">
                          <button className="btn btn-secondary buttons-copy buttons-html5"  onClick ={this.importCsv}tabIndex="0" aria-controls="datatables-buttons" type="button"><span>Import</span></button>
                          {/* <button className="btn btn-secondary buttons-print" tabIndex="0" aria-controls="datatables-buttons" type="button"><span>Print</span></button> */}
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div className="dt-buttons btn-group">
                          <button className="btn btn-secondary buttons-copy buttons-html5" tabIndex="0" aria-controls="datatables-buttons" type="button"><span>Export</span></button>
                          <button className="btn btn-secondary buttons-print" tabIndex="0" aria-controls="datatables-buttons" type="button"><span>Print</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <table id="datatables-buttons" className="table table-striped" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        {
                          headers.map((item, keys) => <th key={keys}>{item}</th>)
                        }
                        <th>Action</th>
                      </tr>
                      <tr>
                        {
                          headers.map((item, keys) => <th key={keys}> <input type="search" className="form-control" name={item} onChange={this.searchItem} placeholder={`Serach ${item}`} aria-controls="datatables-basic" /></th>)
                        }
                        <th><button className="btn btn-primary btn-sm" data-toggle="modal" onClick={() => this.modalOpen()} data-target="#sizedModalLg">New Brand</button></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td className="table-action">
                          <Link to={"#"} onClick={() => this.editData({ name: 'test' })} style={{ marginRight: 10 }}><i className="fa fa-pencil align-middle" aria-hidden="true"></i></Link>
                          <Link to={"#"} onClick={this.deleteData}><i className="fa fa-trash-o align-middle" aria-hidden="true"></i></Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Modal modalOpen={modal} modalClose={this.modalClose} edit={edit} />
        </div>
      </main>
    );
  }
}
