import React, {Component} from 'react';
import axios from 'axios';

export default function Profile(props) {

    const logout = () => {
        axios.delete('/auth/logout')
        .then( () => {
            props.history.push('/')
        })
    }

    return(
        <div>
            <p>This is the profile component</p>
            <button onCLick={logout()}>Logout</button>
        </div>
    )
}