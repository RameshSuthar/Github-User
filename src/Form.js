import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {
    render() {
        return (
            <div>
                <form className="Form" onSubmit={this.props.fetchData}>
                  <input type="text" name="user" placeholder="Search by user id"></input>
                </form>
            </div>
        )
    }
}

export default Form;