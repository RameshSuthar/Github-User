import React, { Component } from 'react';
import "./UsersListPlaceHolder.css";

class UsersPlaceHolder extends Component {
    render() {
        return (
            <div className="Users-List-Skeleton">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        )
    }
} 

export default UsersPlaceHolder;