import React, { Component } from 'react';
import axios from "axios";
import User from "./User";
import UsersListPlaceHolder from "./UsersPlaceHolder";
import Form from "./Form";

class UsersList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
        error: null,
        isLoading: false,
        isSuccess: false,
        formInputName: ""
      }
      this.fetchData = this.fetchData.bind(this);
    }

    fetchData(e) {
      e.preventDefault();
      this.setState({isLoading: true, formInputName: e.target.elements.user.value});
      axios.get(`https://api.github.com/users/${e.target.elements.user.value}`)
      .then((res) => {
        this.setState({data: res.data, error: null, isSuccess: true, isLoading: false})
      })
      .catch((err) => {
        this.setState({data:{}, error: err, isSuccess: false, isLoading: false})
      })
      e.target.elements.user.value = "";
    }

    render() {
        return (
          <div>
            <h1>Github User</h1>
            <Form fetchData={this.fetchData} />
            {this.state.isLoading ? 
              (<UsersListPlaceHolder />) : 
              (this.state.isSuccess && <User className="User-Card" user={this.state.data}/>)
            }
            {this.state.error && <h3>Oops! didn't find any user by user name {this.state.formInputName}</h3>}
          </div>
        )
    }
}

export default UsersList;