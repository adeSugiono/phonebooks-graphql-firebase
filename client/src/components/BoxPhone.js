import React from 'react';
import ButtonAdd from '../containers/ButtonAdd';
import ListPhone from '../containers/ListPhone';



export default function BoxPhone(props) {
    return (
        <div className="container ">
            <h1 className="card text-center alert alert-dark"> <i class="fas fa-address-book">   Phone Book Apps</i></h1>
            <ButtonAdd />
            <br />
            <ListPhone />
        </div>
    )
}

