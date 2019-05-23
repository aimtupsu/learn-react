import React, { Component } from "react";
import '../../styles/common.css';

export default class AuthInput extends Component {

    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.autoFocus) {
            this.nameInput.focus();
        }
    }

    handleChange (event) {

        this.setState({ value: event.target.value })
    }

    render() {

        const error = this.props.errorMessage
            ? <p className="auth-error ">{this.props.errorMessage}</p>
            : null;

        return (
            <div>
                <label className="auth-label" htmlFor={this.props.name}>{this.props.desc}</label>
                {error}
                <input className="auth-input"
                       ref={(input) => this.nameInput = input}
                       name={this.props.name}
                       type={this.props.type}
                       placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.handleChange}
                />
            </div>
        )
    }
}