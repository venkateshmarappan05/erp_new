import React, { Component } from 'react'
import Alert from 'sweetalert2';
import { Link } from 'react-router-dom'
import Modal from './modalItem';

const headers = ["ItemFamilyId" , "ItemFamilyName" , "Action"]
const searchItem = headers.slice(0, -1)

export default class ProductItem extends Component {
    state = {
        modal :false,
        edit:{}, 
        title: ''
      }

      modalOpen = (data) => {
        this.setState({modal: true, title:data.title})
      }

      modalClose =() => {
        this.setState({modal:false , edit:{}, title:''})
      }

      editData = data => {
        this.setState({modal:true , edit:data})
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
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
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
        const { modal,edit } = this.state;
        return (
            <main className="content">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-6">
                        <h1 className="h3 mb-3">Product Item</h1>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6  text-left">
                                        </div>
                                        <div className="col-6 text-right">
                                            <div id="datatables-basic_filter" className="dataTables_filter">
                                                <button className="btn btn-primary" data-toggle="modal" onClick={() => this.modalOpen({title:'Product Item'})} data-target="#sizedModalLg">New Item</button>
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
                                            </tr>
                                            <tr>
                                                {
                                                    searchItem.map((item, keys) => <th key={keys} className="text-center"> <input type="search" className="form-control form-control-sm" name={item} onChange={this.searchItem} placeholder={`Serach ${item}`} aria-controls="datatables-basic" /></th>)
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>61</td>
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
                           {/* Product Item Family*/}
                        <div className="col-6">
                        <h1 className="h3 mb-3">Product Sub Item</h1>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6  text-left">
                                            {/* <div id="datatables-basic_filter" className="dataTables_filter">
                        <label>Search:
                        <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="datatables-basic" />
                        </label>
                      </div> */}
                                        </div>
                                        <div className="col-6 text-right">
                                            <div id="datatables-basic_filter" className="dataTables_filter">
                                                <button className="btn btn-primary" data-toggle="modal" onClick={() => this.modalOpen({title:'Product Sub Item'})} data-target="#sizedModalLg">New SubItem</button>
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
                                            </tr>
                                            <tr>
                                                {
                                                    searchItem.map((item, keys) => <th key={keys}> <input type="search" className="form-control form-control-sm" name={item} onChange={this.searchItem} placeholder={`Serach ${item}`} aria-controls="datatables-basic" /></th>)
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>61</td>
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
                    <Modal modalOpen={modal} modalClose={this.modalClose} edit={edit} title={this.state.title} />
                </div>
            </main>
        )
    }
}
