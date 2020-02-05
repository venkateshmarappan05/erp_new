import React, { Component } from 'react';
import { MSG } from '../../../config/language';
import Validator from "validator"

export default class Modal extends Component {
    state = {
        data: {
            name: ''
        },
        edit: false,
        errors: {}
    }

    resetForm = () => {
        this.setState({
            data: {
                name: ''
            },
            edit: false, 
            errors:{}
        })
    }

    modalClose = () => {
        this.resetForm();
        this.props.modalClose();
    }

    validate = data => {
        const errors = {};
        if (Validator.isEmpty(data.name)) {
            errors.name = MSG['name_cannot_empty'];
        }
        return errors;
    };

    handleSubmit = (e , data) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        
        //   if (Object.keys(errors).length === 0) {
        //     this.props.submit(this.state.data)
        //       .catch(err => {
        //         let globalErrors = { global: err.response.data.errors.global };
        //         this.setState({ errors: globalErrors })
        //       });
                //(data !== null && data !== undefined)?  this.resetForm() : this.modalClose()
        //   }
    };

    handleUpdate = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
          if (Object.keys(errors).length === 0) {
              console.log(this.state.data)
            // this.props.submit(this.state.data)
            //   .catch(err => {
            //     let globalErrors = { global: err.response.data.errors.global };
            //     this.setState({ errors: globalErrors })
            //   });
          }
    }
    handleSave = e => {
        e.preventDefault();
        this.handleSubmit(e ,"update");
    }

    handleChange = e => {
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let editData = nextProps.edit
        if (Object.keys(editData).length !== 0) {
            this.setState({
                data: {
                    ...this.state.data,
                    name: editData.name
                },
                edit: true
            })
        }
    }

    render() {
        const { data, edit, errors } = this.state
        let style, show;
        show = this.props.modalOpen ? 'show' : ''
        style = this.props.modalOpen ? { display: 'block', paddingLeft: '17px' } : { display: 'none' }

        return (
            <div className={`modal fade ${show}`} id="sizedModalLg" tabIndex={-1} style={style} role="dialog" aria-modal="true">
                {errors.global && <div className="alert alert-danger text-center" style={{ margin: "20px", borderRadius: "5px", padding: "15px" }}>{errors.global}</div>}
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Customer</h5>
                            <button type="button" className="close" onClick={() => this.modalClose()} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="modal-body m-3">

                                <div className="form-group ">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control textBox" value={data.name} name="name" onChange={this.handleChange} placeholder="Name" />
                                    {errors.name && <span className="messages ">{errors.name}</span>}
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => this.modalClose()} data-dismiss="modal">Close</button>
                                {
                                    edit ? <button type="button" onClick={this.handleUpdate} className="btn btn-primary">Update</button>
                                        : (
                                            <div>
                                                <button type="submit" className="btn btn-primary">Save</button> {''}
                                                <button type="button" onClick={this.handleSave} className="btn btn-primary">Save and Another</button>
                                            </div>
                                        )
                                }
                            </div>
                        </form>
                    </div>
                </div>
                {this.props.modalOpen && <div className="modal-backdrop fade show" />}
            </div>

        )
    }
}
