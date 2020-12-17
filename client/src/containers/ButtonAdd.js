import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhonebooks } from '../actions';

class ButtonAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', isButton: false };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addData(this.state.name, this.state.phone);
        this.setState({ name: '', phone: '' })
    }
    handleAddButton(event) {
        event.preventDefault();
        this.setState({ isButton: true })
    }
    handleCancel(event) {
        event.preventDefault();
        this.setState({ isButton: false })
    }



    Form() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="alert alert-dark">Adding Form</h3>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.name} placeholder="name" onChange={this.handleChangeName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.phone} placeholder="phone" onChange={this.handleChangePhone} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-success" type="submit" onClick={this.handleSubmit} >
                        <i className="far fa-check-circle" /> Save</button>
                    <button className="btn btn-warning" type="submit" onClick={this.handleCancel} >
                        <i className="fas fa-ban" /> Cancle </button>
                </div>
            </form >
        )
    }
    Add() {
        return (
            <div >
            <button className="btn btn-primary" href='/' onClick={this.handleAddButton} type="button" >
            <i className="fas fa-plus-circle"> Add</i>
            </button><br></br>
            </div>
        )
    }

    render() {
     if(this.state.isButton){
         return this.Form();
     }
     else {
         return this.Add();
     }
    }
}

const mapDispatchToProps = dispatch => ({
    addData: (name, phone) => dispatch(addPhonebooks(name, phone)
    )
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(ButtonAdd)
