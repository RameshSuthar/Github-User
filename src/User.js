import React, { Component } from 'react';
import "./User.css";

class User extends Component {
    render() {
        return (
            <div className="User">
                <div className="User-img">
                    <img alt="User Avatar" src={this.props.user.avatar_url}/>
                </div>
                <div className='content'>
                    <p>User Name : {this.props.user.login}</p>
                    {this.props.user.name && <p>Name : {this.props.user.name}</p>}
                </div>
            </div>
        )
    }
}

export default User;