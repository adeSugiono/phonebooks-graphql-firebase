import React, { Component } from 'react';
import Phonebooks from './Phonebooks';
import { connect } from 'react-redux';
import { loadPhonebooks } from '../actions';


class ListPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { nameFilter: '', phoneFilter: '' }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this)
    }
    componentDidMount(){
        this.props.loadPhone();
    }

    handleChangeName(event) {
        this.setState({ nameFilter: event.target.value })
    }
    handleChangePhone(event) {
        this.setState({ phoneFilter: event.target.value })
    }

    Search() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <h3 className="alert alert-dark">Search Form</h3>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="nameFilter" value={this.state.nameFilter} placeholder="name" onChange={this.handleChangeName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="phoneFilter" value={this.state.phoneFilter} placeholder="phone" onChange={this.handleChangePhone} />
                    </div>
                </div>
            </form >
        )
    }

    render() {
        let {data} = this.props;
        let {nameFilter, phoneFilter} = this.state;
        if (nameFilter && phoneFilter) {
            const filterItems = (name, phone) => {
                return data.filter(item => {
                    return (
                        item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                        item.phone.indexOf(phone) > -1
                    );
                });
            };
            data = filterItems(nameFilter, phoneFilter);
        }
        if (nameFilter) {
            const filterItems = name => {
                return data.filter(item => {
                    return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                });
            };
            data = filterItems(nameFilter);
        }
        if  (phoneFilter) {
            const filterItems = phone => {
                return data.filter(item => {
                    return item.phone.indexOf(phone) > -1;
                });
            };
            data = filterItems(phoneFilter);
        }
        
        const listNode = data.map((item, index) => < Phonebooks index={index + 1} 
        key={item.id} id={item.id} name={item.name} phone={item.phone} sent={item.sent} />)
        return (
            <div >
                
                    {this.Search()}
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listNode}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.phonebooks
})

const mapDispatchToProps = (dispatch) => ({
    loadPhone: () => dispatch(loadPhonebooks())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPhone)