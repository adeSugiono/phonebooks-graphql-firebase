import React, { Component } from 'react';


export default class TablePhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            editButton: false
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this)
    }

    handleChangeName(event){
        this.setState({name: event.target.value})
    }
    handleChangePhone(event){
        this.setState({phone: event.target.value})
    }
    handleSave(event){
        event.preventDefault();
        const {name, phone} = this.state;
        if (name && phone){
            this.props.editData(name, phone);
            this.setState({editButton: false})
        }
    }
    handleCancel(event){
        event.preventDefault();
        this.setState({editButton: false})
    }
    handleEditButton(event){
        event.preventDefault();
        this.setState({editButton: true, name: this.props.name, phone: this.props.phone})
    }



    item() {
        let { index, name, phone, sent, removeData, resendData } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                    <button type="submit" className="btn btn-warning" onClick={this.handleEditButton}>
                        <i className="fas fa-pencil-alt mr-1" /> Edit </button>
                    <button type="submit" className="btn btn-danger ml-3" onClick={sent ? removeData : resendData} >
                        {sent ? <i className="far fa-trash-alt mr-1" /> : <i className="fas fa-redo" />} {sent ? 'Delete' : 'Resend'} </button>
                </td>
            </tr>
        )
    }

    editItem() {
        let { index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td><input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChangeName} /></td>
                <td><input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.handleChangePhone} /></td>
                <td><button type="submit" className="btn btn-success" onClick={this.handleSave} >
                    <i className="far fa-sticky-note mr-2" /> Save </button>
                    <button type="submit" className="btn btn-danger ml-3" onClick={this.handleCancel} >
                        <i className="fas fa-window-close mr-2" /> Cancel </button>
                </td>
            </tr>
        )
    }

    render() {
        if (this.state.editButton){
            return this.editItem();
        } else {
            return this.item();
        }
    }
}
